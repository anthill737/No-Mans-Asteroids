import * as THREE from 'three';

export interface RadarBlip {
  position: THREE.Vector3;
  type: 'asteroid' | 'enemy';
}

export type WeaponType = 'laser' | 'chaingun' | 'missile';

export interface CockpitHUD {
  group: THREE.Group;
  setHealth(ratio: number): void;
  setShield(ratio: number): void;
  setAmmo(count: number, maxCount: number): void;
  setActiveWeapon(weapon: WeaponType): void;
  setCredits(amount: number): void;
  updateRadar(
    playerPos: THREE.Vector3,
    playerQuat: THREE.Quaternion,
    blips: RadarBlip[],
  ): void;
}

const RADAR_RANGE = 200;
const RADAR_RADIUS = 0.085;
const MAX_BLIPS = 20;
const AMMO_SEGMENTS = 10;

const WEAPON_COLORS: Record<WeaponType, number> = {
  laser: 0x00ffff,
  chaingun: 0xff8800,
  missile: 0xff2244,
};

// Creates a bar indicator anchored at its left edge.
// Returns a setRatio(0..1) function that scales the fill.
function makeBar(
  group: THREE.Group,
  cx: number,
  cy: number,
  cz: number,
  width: number,
  fillColor: number,
  role: string,
): { setRatio: (ratio: number) => void; fillMat: THREE.MeshLambertMaterial } {
  const bgMat = new THREE.MeshLambertMaterial({ color: 0x0a0a0a });
  const bg = new THREE.Mesh(new THREE.BoxGeometry(width + 0.008, 0.022, 0.04), bgMat);
  bg.position.set(cx, cy, cz);
  group.add(bg);

  const fillMat = new THREE.MeshLambertMaterial({
    color: fillColor,
    emissive: new THREE.Color(fillColor),
    emissiveIntensity: 0.6,
  });
  const fill = new THREE.Mesh(new THREE.BoxGeometry(width, 0.016, 0.034), fillMat);

  // Pivot group at left edge so scale.x extends rightward only.
  const pivot = new THREE.Group();
  pivot.position.set(cx - width / 2, cy, cz);
  pivot.userData.role = role;
  group.add(pivot);

  // Fill's local origin is its center; shift right so left edge is at pivot origin.
  fill.position.x = width / 2;
  pivot.add(fill);

  return {
    fillMat,
    setRatio(ratio: number) {
      const r = Math.max(0, Math.min(1, ratio));
      fill.scale.x = Math.max(r, 0.0001);
      // Keep left edge fixed: center = leftEdge + (width * r) / 2
      fill.position.x = (width / 2) * r;
    },
  };
}

export function createCockpitMesh(): CockpitHUD {
  const group = new THREE.Group();

  const panelMat = new THREE.MeshLambertMaterial({
    color: 0x1a1a2e,
    flatShading: true,
  });

  // Main dashboard panel — wide, low, occupies bottom of view
  const dash = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.22, 0.38), panelMat);
  dash.position.set(0, -0.46, -0.88);
  group.add(dash);

  // Left side console
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.42, 0.42), panelMat);
  left.position.set(-0.92, -0.46, -0.84);
  group.add(left);

  // Right side console
  const right = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.42, 0.42), panelMat);
  right.position.set(0.92, -0.46, -0.84);
  group.add(right);

  // Upper windshield frame bar
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 0.06), panelMat);
  frame.position.set(0, 0.44, -0.92);
  group.add(frame);

  // ── Health bar (green → yellow → red) — left third of dashboard ──────────
  const healthBar = makeBar(group, -0.55, -0.34, -0.87, 0.35, 0x00dd44, 'healthPivot');

  function setHealth(ratio: number): void {
    const r = Math.max(0, Math.min(1, ratio));
    // Color shift: green → yellow → red
    const color =
      r > 0.5
        ? new THREE.Color(0x00dd44).lerp(new THREE.Color(0xddcc00), (1 - r) * 2)
        : new THREE.Color(0xddcc00).lerp(new THREE.Color(0xff2200), (0.5 - r) * 2);
    healthBar.fillMat.color.copy(color);
    healthBar.fillMat.emissive.copy(color);
    healthBar.setRatio(r);
  }

  // ── Shield bar (blue) — center of dashboard ───────────────────────────────
  const shieldBar = makeBar(group, 0.0, -0.34, -0.87, 0.35, 0x0099ff, 'shieldPivot');

  function setShield(ratio: number): void {
    shieldBar.setRatio(ratio);
  }

  // ── Ammo counter — row of small segments, right area of dashboard ─────────
  const ammoFullMat = new THREE.MeshLambertMaterial({
    color: 0xffcc00,
    emissive: new THREE.Color(0xffcc00),
    emissiveIntensity: 0.6,
  });
  const ammoEmptyMat = new THREE.MeshLambertMaterial({ color: 0x1a1500 });

  const ammoMeshes: THREE.Mesh[] = [];
  const segW = 0.025;
  const segGap = 0.006;
  const ammoStartX = 0.33;
  for (let i = 0; i < AMMO_SEGMENTS; i++) {
    const seg = new THREE.Mesh(new THREE.BoxGeometry(segW, 0.018, 0.03), ammoFullMat);
    seg.position.set(ammoStartX + i * (segW + segGap), -0.34, -0.87);
    group.add(seg);
    ammoMeshes.push(seg);
  }

  function setAmmo(count: number, maxCount: number): void {
    const filled = maxCount > 0 ? Math.round((count / maxCount) * AMMO_SEGMENTS) : 0;
    ammoMeshes.forEach((m, i) => {
      m.material = i < filled ? ammoFullMat : ammoEmptyMat;
    });
  }

  // ── Weapon selector — three indicator lights on the left console ──────────
  // Each light glows its weapon color when active, is dark when inactive.
  const weaponOrder: WeaponType[] = ['laser', 'chaingun', 'missile'];
  const weaponIndicatorMats: Record<WeaponType, THREE.MeshLambertMaterial> = {
    laser: new THREE.MeshLambertMaterial({ color: 0x003333 }),
    chaingun: new THREE.MeshLambertMaterial({ color: 0x1a0800 }),
    missile: new THREE.MeshLambertMaterial({ color: 0x1a0005 }),
  };

  for (let i = 0; i < weaponOrder.length; i++) {
    const weapon = weaponOrder[i];
    const indicator = new THREE.Mesh(
      new THREE.BoxGeometry(0.055, 0.032, 0.025),
      weaponIndicatorMats[weapon],
    );
    indicator.position.set(-0.92, -0.3 - i * 0.048, -0.84);
    indicator.userData.weaponSlot = weapon;
    group.add(indicator);
  }

  function setActiveWeapon(weapon: WeaponType): void {
    for (const w of weaponOrder) {
      const mat = weaponIndicatorMats[w];
      if (w === weapon) {
        mat.color.setHex(WEAPON_COLORS[w]);
        mat.emissive.setHex(WEAPON_COLORS[w]);
        mat.emissiveIntensity = 1.0;
      } else {
        // dim — barely visible base color
        const dimColor = WEAPON_COLORS[w];
        mat.color.setHex(dimColor).multiplyScalar(0.08);
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0;
      }
    }
  }

  // Initialize with laser active
  setActiveWeapon('laser');

  // ── Radar display — on top of right console ────────────────────────────────
  const radarCenter = new THREE.Vector3(0.92, -0.23, -0.82);

  const radarBgMat = new THREE.MeshLambertMaterial({ color: 0x001a00 });
  const radarDisk = new THREE.Mesh(
    new THREE.CylinderGeometry(RADAR_RADIUS + 0.01, RADAR_RADIUS + 0.01, 0.005, 24),
    radarBgMat,
  );
  radarDisk.position.copy(radarCenter);
  group.add(radarDisk);

  const radarRingMat = new THREE.MeshLambertMaterial({
    color: 0x00cc22,
    emissive: new THREE.Color(0x00cc22),
    emissiveIntensity: 0.4,
  });
  const radarRing = new THREE.Mesh(
    new THREE.TorusGeometry(RADAR_RADIUS + 0.005, 0.004, 8, 32),
    radarRingMat,
  );
  radarRing.rotation.x = Math.PI / 2;
  radarRing.position.set(radarCenter.x, radarCenter.y + 0.003, radarCenter.z);
  group.add(radarRing);

  // Center pip — represents the player
  const centerDotMat = new THREE.MeshLambertMaterial({
    color: 0x00ff44,
    emissive: new THREE.Color(0x00ff44),
    emissiveIntensity: 0.8,
  });
  const centerDot = new THREE.Mesh(new THREE.SphereGeometry(0.004, 6, 6), centerDotMat);
  centerDot.position.set(radarCenter.x, radarCenter.y + 0.006, radarCenter.z);
  group.add(centerDot);

  // Blip mesh pool — pre-allocated, hidden until needed
  const blipMeshes: THREE.Mesh[] = [];
  for (let i = 0; i < MAX_BLIPS; i++) {
    const blip = new THREE.Mesh(
      new THREE.SphereGeometry(0.006, 4, 4),
      new THREE.MeshLambertMaterial({
        color: 0xff2200,
        emissive: new THREE.Color(0xff2200),
        emissiveIntensity: 0.8,
      }),
    );
    blip.position.copy(radarCenter);
    blip.visible = false;
    blip.userData.isBlip = true;
    group.add(blip);
    blipMeshes.push(blip);
  }

  function updateRadar(
    playerPos: THREE.Vector3,
    playerQuat: THREE.Quaternion,
    blips: RadarBlip[],
  ): void {
    blipMeshes.forEach((b) => {
      b.visible = false;
    });

    const invQuat = playerQuat.clone().invert();
    let idx = 0;

    for (const blip of blips) {
      if (idx >= MAX_BLIPS) break;

      const offset = blip.position.clone().sub(playerPos);
      if (offset.length() > RADAR_RANGE) continue;

      // Transform world offset into ship/camera local space.
      offset.applyQuaternion(invQuat);

      // Map local X (strafe) and Z (depth, -Z=forward) onto the radar disk.
      const rx = (offset.x / RADAR_RANGE) * RADAR_RADIUS;
      const rz = (offset.z / RADAR_RANGE) * RADAR_RADIUS;

      const blipMesh = blipMeshes[idx++];
      blipMesh.position.set(radarCenter.x + rx, radarCenter.y + 0.007, radarCenter.z + rz);
      blipMesh.visible = true;

      const color = blip.type === 'enemy' ? 0xff2200 : 0x888800;
      const mat = blipMesh.material as THREE.MeshLambertMaterial;
      mat.color.setHex(color);
      mat.emissive.setHex(color);
    }
  }

  // ── Credits — stored internally; visual display is the HTML overlay in main ─
  let _credits = 0;

  function setCredits(amount: number): void {
    _credits = Math.max(0, amount);
  }

  // Expose for completeness so the value is accessible if needed
  Object.defineProperty(setCredits, 'current', { get: () => _credits });

  return { group, setHealth, setShield, setAmmo, setActiveWeapon, setCredits, updateRadar };
}
