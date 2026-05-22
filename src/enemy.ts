import * as THREE from 'three';
import { EntityManager, Vehicle, PursuitBehavior, EvadeBehavior } from 'yuka';
import { ENEMY_CREDIT_MIN, ENEMY_CREDIT_MAX } from './credits';

export { ENEMY_CREDIT_MIN, ENEMY_CREDIT_MAX };
export const ENEMY_PROJECTILE_DAMAGE = 8;
export const ENEMY_MAX_HEALTH = 100;
export const PURSUIT_RANGE = 300;
export const EVADE_HEALTH_THRESHOLD = 0.3;

const PROJECTILE_SPEED = 80;
const FIRE_INTERVAL = 4.0;
const FIRE_RANGE = 200;
const HIT_RADIUS = 3.0;
const HIT_RADIUS_SQ = HIT_RADIUS * HIT_RADIUS;
const PROJECTILE_LIFETIME = 5.0;
const MAX_PROJECTILE_RANGE = PROJECTILE_SPEED * PROJECTILE_LIFETIME;
const MAX_PROJECTILE_RANGE_SQ = MAX_PROJECTILE_RANGE * MAX_PROJECTILE_RANGE;
const FIRE_RANGE_SQ = FIRE_RANGE * FIRE_RANGE;
const PURSUIT_RANGE_SQ = PURSUIT_RANGE * PURSUIT_RANGE;

const ENEMY_MAX_SPEED = 12;
const ENEMY_MAX_FORCE = 8;
const EVADE_PANIC_DISTANCE = 10_000;

// Pool capacity: 10 enemies × (5s lifetime / 4s interval) × 2 safety margin
const MAX_PROJECTILES = 60;

// Reusable temp — never allocate inside the hot update loop
const _mat4 = new THREE.Matrix4();

interface ProjectileSlot {
  posX: number; posY: number; posZ: number;
  velX: number; velY: number; velZ: number;
  lifeRemaining: number;
  originX: number; originY: number; originZ: number;
}

interface EnemyEntry {
  mesh: THREE.Mesh;
  vehicle: Vehicle;
  pursuitBehavior: PursuitBehavior;
  evadeBehavior: EvadeBehavior;
  fireTimer: number;
}

// Shared geometry/material across all EnemyAISystem instances (module-level singleton)
const projectileGeo = new THREE.SphereGeometry(0.3, 4, 4);
const projectileMat = new THREE.MeshBasicMaterial({ color: 0xff4400 });

export class EnemyAISystem {
  private readonly slots: ProjectileSlot[];
  private activeCount = 0;
  private readonly projectileInstances: THREE.InstancedMesh;

  private readonly entries: EnemyEntry[] = [];
  private readonly scene: THREE.Scene;
  private readonly entityManager: EntityManager;
  private readonly playerVehicle: Vehicle;

  constructor(scene: THREE.Scene, enemyMeshes: THREE.Mesh[]) {
    this.scene = scene;
    this.entityManager = new EntityManager();
    this.playerVehicle = new Vehicle();

    // Pre-allocate projectile slots — no allocation in the hot loop
    this.slots = Array.from({ length: MAX_PROJECTILES }, () => ({
      posX: 0, posY: 0, posZ: 0,
      velX: 0, velY: 0, velZ: 0,
      lifeRemaining: 0,
      originX: 0, originY: 0, originZ: 0,
    }));

    // Single instanced mesh for all projectiles (1 draw call regardless of count)
    this.projectileInstances = new THREE.InstancedMesh(
      projectileGeo,
      projectileMat,
      MAX_PROJECTILES,
    );
    this.projectileInstances.count = 0;
    this.projectileInstances.frustumCulled = false;
    scene.add(this.projectileInstances);

    const count = enemyMeshes.length;
    for (let i = 0; i < count; i++) {
      const mesh = enemyMeshes[i];
      if (mesh.userData.health === undefined) {
        mesh.userData.health = ENEMY_MAX_HEALTH;
      }
      if (mesh.userData.creditValue === undefined) {
        mesh.userData.creditValue =
          ENEMY_CREDIT_MIN +
          Math.floor(Math.random() * (ENEMY_CREDIT_MAX - ENEMY_CREDIT_MIN + 1));
      }

      const vehicle = new Vehicle();
      vehicle.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
      vehicle.maxSpeed = ENEMY_MAX_SPEED;
      vehicle.maxForce = ENEMY_MAX_FORCE;

      const pursuitBehavior = new PursuitBehavior(this.playerVehicle);
      pursuitBehavior.active = false;
      vehicle.steering.add(pursuitBehavior);

      const evadeBehavior = new EvadeBehavior(this.playerVehicle);
      evadeBehavior.active = false;
      evadeBehavior.panicDistance = EVADE_PANIC_DISTANCE;
      vehicle.steering.add(evadeBehavior);

      this.entityManager.add(vehicle);

      this.entries.push({
        mesh,
        vehicle,
        pursuitBehavior,
        evadeBehavior,
        fireTimer: (i * FIRE_INTERVAL) / Math.max(count, 1),
      });
    }
  }

  get projectileCount(): number {
    return this.activeCount;
  }

  update(dt: number, playerPosition: THREE.Vector3): void {
    const px = playerPosition.x;
    const py = playerPosition.y;
    const pz = playerPosition.z;

    // Update active projectile pool with compaction (swap-with-last on removal)
    let i = 0;
    while (i < this.activeCount) {
      const s = this.slots[i];
      s.posX += s.velX * dt;
      s.posY += s.velY * dt;
      s.posZ += s.velZ * dt;
      s.lifeRemaining -= dt;

      const odx = s.posX - s.originX;
      const ody = s.posY - s.originY;
      const odz = s.posZ - s.originZ;
      const distSq = odx * odx + ody * ody + odz * odz;

      if (s.lifeRemaining <= 0 || distSq >= MAX_PROJECTILE_RANGE_SQ) {
        // Swap expired slot with the last active slot and shrink count
        this.activeCount--;
        if (i < this.activeCount) {
          const last = this.slots[this.activeCount];
          s.posX = last.posX; s.posY = last.posY; s.posZ = last.posZ;
          s.velX = last.velX; s.velY = last.velY; s.velZ = last.velZ;
          s.lifeRemaining = last.lifeRemaining;
          s.originX = last.originX; s.originY = last.originY; s.originZ = last.originZ;
        }
        // Do NOT increment i — re-check this slot (now holds the moved slot's data)
      } else {
        _mat4.makeTranslation(s.posX, s.posY, s.posZ);
        this.projectileInstances.setMatrixAt(i, _mat4);
        i++;
      }
    }
    this.projectileInstances.count = this.activeCount;
    this.projectileInstances.instanceMatrix.needsUpdate = true;

    // Sync player vehicle position so Yuka behaviors can reference it
    this.playerVehicle.position.set(px, py, pz);

    // Select active behavior per enemy based on health and range (squared distance)
    for (const entry of this.entries) {
      const { mesh, vehicle, pursuitBehavior, evadeBehavior } = entry;
      const health = (mesh.userData.health as number) ?? ENEMY_MAX_HEALTH;
      const healthRatio = health / ENEMY_MAX_HEALTH;

      const dx = vehicle.position.x - px;
      const dy = vehicle.position.y - py;
      const dz = vehicle.position.z - pz;
      const distSq = dx * dx + dy * dy + dz * dz;

      if (healthRatio < EVADE_HEALTH_THRESHOLD) {
        pursuitBehavior.active = false;
        evadeBehavior.active = true;
      } else if (distSq <= PURSUIT_RANGE_SQ) {
        pursuitBehavior.active = true;
        evadeBehavior.active = false;
      } else {
        pursuitBehavior.active = false;
        evadeBehavior.active = false;
        vehicle.velocity.multiplyScalar(0.9);
      }
    }

    // Run Yuka steering integration
    this.entityManager.update(dt);

    // Sync Three.js mesh positions and handle firing
    for (const entry of this.entries) {
      const { mesh, vehicle } = entry;

      mesh.position.set(vehicle.position.x, vehicle.position.y, vehicle.position.z);

      const vx = vehicle.velocity.x;
      const vy = vehicle.velocity.y;
      const vz = vehicle.velocity.z;
      if (vx * vx + vy * vy + vz * vz > 0.25) { // speed > 0.5
        mesh.lookAt(mesh.position.x + vx, mesh.position.y + vy, mesh.position.z + vz);
      }

      const dx = mesh.position.x - px;
      const dy = mesh.position.y - py;
      const dz = mesh.position.z - pz;
      const distSq = dx * dx + dy * dy + dz * dz;

      entry.fireTimer -= dt;
      if (entry.fireTimer <= 0) {
        if (distSq <= FIRE_RANGE_SQ) {
          this.spawnProjectile(mesh.position, playerPosition);
        }
        entry.fireTimer = FIRE_INTERVAL;
      }
    }
  }

  checkPlayerHit(playerPosition: THREE.Vector3): boolean {
    const px = playerPosition.x;
    const py = playerPosition.y;
    const pz = playerPosition.z;

    let i = 0;
    while (i < this.activeCount) {
      const s = this.slots[i];
      const dx = s.posX - px;
      const dy = s.posY - py;
      const dz = s.posZ - pz;
      if (dx * dx + dy * dy + dz * dz < HIT_RADIUS_SQ) {
        // Remove by swapping with last active slot
        this.activeCount--;
        if (i < this.activeCount) {
          const last = this.slots[this.activeCount];
          s.posX = last.posX; s.posY = last.posY; s.posZ = last.posZ;
          s.velX = last.velX; s.velY = last.velY; s.velZ = last.velZ;
          s.lifeRemaining = last.lifeRemaining;
          s.originX = last.originX; s.originY = last.originY; s.originZ = last.originZ;
          // Fix the matrix for the moved slot
          _mat4.makeTranslation(s.posX, s.posY, s.posZ);
          this.projectileInstances.setMatrixAt(i, _mat4);
        }
        this.projectileInstances.count = this.activeCount;
        this.projectileInstances.instanceMatrix.needsUpdate = true;
        return true;
      }
      i++;
    }
    return false;
  }

  reset(): void {
    this.activeCount = 0;
    this.projectileInstances.count = 0;
    this.projectileInstances.instanceMatrix.needsUpdate = true;
  }

  private spawnProjectile(from: THREE.Vector3, to: THREE.Vector3): void {
    if (this.activeCount >= MAX_PROJECTILES) return;

    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dz = to.z - from.z;
    const lenSq = dx * dx + dy * dy + dz * dz;
    if (lenSq === 0) return; // enemy exactly at player position — skip degenerate shot

    const slot = this.slots[this.activeCount];
    slot.posX = from.x; slot.posY = from.y; slot.posZ = from.z;
    slot.originX = from.x; slot.originY = from.y; slot.originZ = from.z;

    const invLen = PROJECTILE_SPEED / Math.sqrt(lenSq);
    slot.velX = dx * invLen;
    slot.velY = dy * invLen;
    slot.velZ = dz * invLen;
    slot.lifeRemaining = PROJECTILE_LIFETIME;

    this.activeCount++;
  }
}
