import * as THREE from 'three';

export interface RadarBlip {
  position: THREE.Vector3;
  type: 'asteroid' | 'enemy';
  /** Horizontal bearing in player local XZ plane, radians, -π to π; 0 = ahead, ±π = behind */
  bearing: number;
  /** Vertical elevation angle, radians; positive = above player, negative = below */
  elevation: number;
}

export type WeaponType = 'laser' | 'chaingun' | 'missile';

export interface CockpitHUD {
  group: THREE.Group;
  setHealth(ratio: number): void;
  setShield(ratio: number): void;
  setAmmo(count: number, maxCount: number): void;
  setActiveWeapon(weapon: WeaponType): void;
  setCredits(amount: number): void;
  update(dt: number): void;
  updateRadar(
    playerPos: THREE.Vector3,
    playerQuat: THREE.Quaternion,
    blips: RadarBlip[],
  ): void;
  getReadoutText(key: 'health' | 'shields' | 'ammo' | 'credits' | 'weapon'): string;
}

export const RADAR_RANGE = 600;
const RADAR_RADIUS = 0.085;
const MAX_BLIPS = 20;
const AMMO_SEGMENTS = 10;
const LOW_HEALTH_THRESHOLD = 0.25;
const BLINK_PERIOD = 0.5;

const WEAPON_COLORS: Record<WeaponType, number> = {
  laser: 0x00ffff,
  chaingun: 0xff8800,
  missile: 0xff2244,
};

const LABEL_CANVAS_W = 384;
const LABEL_CANVAS_H = 48;

/**
 * Pure function: filters enemies within RADAR_RANGE and computes each contact's
 * horizontal bearing and vertical elevation relative to the player's orientation.
 *
 * bearing:   atan2(localX, localZ) — 0 = directly ahead, ±π = directly behind
 * elevation: atan2(localY, horizontalDistance) — positive = above, negative = below
 */
export function computeRadarContacts(
  enemies: ReadonlyArray<{ position: THREE.Vector3 }>,
  playerPos: THREE.Vector3,
  playerQuat: THREE.Quaternion,
): RadarBlip[] {
  const invQuat = playerQuat.clone().invert();
  const blips: RadarBlip[] = [];

  for (const enemy of enemies) {
    const offset = enemy.position.clone().sub(playerPos);
    if (offset.length() > RADAR_RANGE) continue;

    offset.applyQuaternion(invQuat);

    const hDist = Math.sqrt(offset.x * offset.x + offset.z * offset.z);
    const bearing = Math.atan2(offset.x, offset.z);
    const elevation = Math.atan2(offset.y, hDist);

    blips.push({
      position: enemy.position.clone(),
      type: 'enemy',
      bearing,
      elevation,
    });
  }

  return blips;
}

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

  const pivot = new THREE.Group();
  pivot.position.set(cx - width / 2, cy, cz);
  pivot.userData.role = role;
  group.add(pivot);

  fill.position.x = width / 2;
  pivot.add(fill);

  return {
    fillMat,
    setRatio(ratio: number) {
      const r = Math.max(0, Math.min(1, ratio));
      fill.scale.x = Math.max(r, 0.0001);
      fill.position.x = (width / 2) * r;
    },
  };
}

function makeTextPlane(
  group: THREE.Group,
  cx: number,
  cy: number,
  cz: number,
  width: number,
  height: number,
  readoutKey: string,
): { draw: (text: string) => void } {
  const geo = new THREE.PlaneGeometry(width, height);
  let mat: THREE.Material;
  let drawCanvas: ((text: string) => void) | null = null;

  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvas.width = LABEL_CANVAS_W;
    canvas.height = LABEL_CANVAS_H;
    const ctx = canvas.getContext('2d');
    const texture = new THREE.CanvasTexture(canvas);
    mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
    });
    drawCanvas = (text: string) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, LABEL_CANVAS_W, LABEL_CANVAS_H);
      ctx.fillStyle = 'rgba(0, 230, 200, 0.92)';
      ctx.font = 'bold 22px monospace';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      ctx.fillText(text, 6, LABEL_CANVAS_H / 2);
      texture.needsUpdate = true;
    };
  } else {
    mat = new THREE.MeshBasicMaterial({ color: 0x00e6c8 });
  }

  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(cx, cy, cz);
  mesh.userData.hudReadout = readoutKey;
  group.add(mesh);

  function draw(text: string): void {
    mesh.userData.hudReadoutText = text;
    drawCanvas?.(text);
  }

  return { draw };
}

export function createCockpitMesh(): CockpitHUD {
  const group = new THREE.Group();

  const panelMat = new THREE.MeshLambertMaterial({
    color: 0x1a1a2e,
    flatShading: true,
  });

  const dash = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.22, 0.38), panelMat);
  dash.position.set(0, -0.46, -0.88);
  group.add(dash);

  const left = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.42, 0.42), panelMat);
  left.position.set(-0.92, -0.46, -0.84);
  group.add(left);

  const right = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.42, 0.42), panelMat);
  right.position.set(0.92, -0.46, -0.84);
  group.add(right);

  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 0.06), panelMat);
  frame.position.set(0, 0.44, -0.92);
  group.add(frame);

  const healthBar = makeBar(group, -0.55, -0.34, -0.87, 0.35, 0x00dd44, 'healthPivot');
  const shieldBar = makeBar(group, 0.0, -0.34, -0.87, 0.35, 0x0099ff, 'shieldPivot');

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

  const healthTextPlane = makeTextPlane(group, -0.55, -0.285, -0.87, 0.38, 0.046, 'health');
  const shieldTextPlane = makeTextPlane(group, 0.0, -0.285, -0.87, 0.38, 0.046, 'shields');
  const ammoTextPlane = makeTextPlane(group, 0.48, -0.285, -0.87, 0.34, 0.046, 'ammo');
  const creditsTextPlane = makeTextPlane(group, -0.45, -0.44, -0.87, 0.42, 0.046, 'credits');
  const weaponTextPlane = makeTextPlane(group, -0.92, -0.245, -0.84, 0.20, 0.046, 'weapon');

  const readoutTexts: Record<string, string> = {
    health: '',
    shields: '',
    ammo: '',
    credits: '',
    weapon: '',
  };

  const warningLightMat = new THREE.MeshLambertMaterial({
    color: 0xff1100,
    emissive: new THREE.Color(0xff1100),
    emissiveIntensity: 0,
  });
  const warningLight = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.025, 0.025),
    warningLightMat,
  );
  warningLight.position.set(-0.76, -0.34, -0.87);
  warningLight.userData.isWarningLight = true;
  warningLight.visible = false;
  group.add(warningLight);

  let _lowHealthActive = false;
  let _warningPhase = 0;

  function setHealth(ratio: number): void {
    const r = Math.max(0, Math.min(1, ratio));
    const color =
      r > 0.5
        ? new THREE.Color(0x00dd44).lerp(new THREE.Color(0xddcc00), (1 - r) * 2)
        : new THREE.Color(0xddcc00).lerp(new THREE.Color(0xff2200), (0.5 - r) * 2);
    healthBar.fillMat.color.copy(color);
    healthBar.fillMat.emissive.copy(color);
    healthBar.setRatio(r);
    const cur = Math.round(r * 100);
    const text = `HEALTH  ${cur} / 100`;
    readoutTexts.health = text;
    healthTextPlane.draw(text);

    _lowHealthActive = r < LOW_HEALTH_THRESHOLD;
    if (!_lowHealthActive) {
      warningLight.visible = false;
      warningLightMat.emissiveIntensity = 0;
      _warningPhase = 0;
    }
  }

  function setShield(ratio: number): void {
    shieldBar.setRatio(ratio);
    const cur = Math.round(Math.max(0, Math.min(1, ratio)) * 100);
    const text = `SHIELDS  ${cur} / 100`;
    readoutTexts.shields = text;
    shieldTextPlane.draw(text);
  }

  function setAmmo(count: number, maxCount: number): void {
    const filled = maxCount > 0 ? Math.round((count / maxCount) * AMMO_SEGMENTS) : 0;
    ammoMeshes.forEach((m, i) => {
      m.material = i < filled ? ammoFullMat : ammoEmptyMat;
    });
    const text = `AMMO  ${count} / ${maxCount}`;
    readoutTexts.ammo = text;
    ammoTextPlane.draw(text);
  }

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
        const dimColor = WEAPON_COLORS[w];
        mat.color.setHex(dimColor).multiplyScalar(0.08);
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0;
      }
    }
    const text = `WEAPON  ${weapon.toUpperCase()}`;
    readoutTexts.weapon = text;
    weaponTextPlane.draw(text);
  }

  setActiveWeapon('laser');
  setHealth(1);
  setShield(1);

  // ── Radar display (3D sphere with horizontal bearing + elevation encoding) ──

  const radarCenter = new THREE.Vector3(0.92, -0.23, -0.82);

  // Dark background disk for readability
  const radarBgMat = new THREE.MeshLambertMaterial({ color: 0x001a00 });
  const radarDisk = new THREE.Mesh(
    new THREE.CylinderGeometry(RADAR_RADIUS + 0.01, RADAR_RADIUS + 0.01, 0.005, 24),
    radarBgMat,
  );
  radarDisk.position.copy(radarCenter);
  group.add(radarDisk);

  // Equatorial ring (horizontal plane reference)
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

  // Vertical meridian ring (elevation reference — faces the player)
  const radarMeridianMat = new THREE.MeshLambertMaterial({
    color: 0x008811,
    emissive: new THREE.Color(0x008811),
    emissiveIntensity: 0.25,
  });
  const radarMeridian = new THREE.Mesh(
    new THREE.TorusGeometry(RADAR_RADIUS + 0.004, 0.0025, 8, 32),
    radarMeridianMat,
  );
  // Default TorusGeometry orientation is the XY plane — a vertical ring facing the player
  radarMeridian.position.copy(radarCenter);
  group.add(radarMeridian);

  // Center dot (player's own position)
  const centerDotMat = new THREE.MeshLambertMaterial({
    color: 0x00ff44,
    emissive: new THREE.Color(0x00ff44),
    emissiveIntensity: 0.8,
  });
  const centerDot = new THREE.Mesh(new THREE.SphereGeometry(0.004, 6, 6), centerDotMat);
  centerDot.position.set(radarCenter.x, radarCenter.y + 0.006, radarCenter.z);
  group.add(centerDot);

  // Forward indicator dot at the "ahead" edge of the equatorial ring
  // bearing=0 (directly ahead) maps to +bz, so this dot marks the forward direction
  const fwdDotMat = new THREE.MeshLambertMaterial({
    color: 0x44ff44,
    emissive: new THREE.Color(0x44ff44),
    emissiveIntensity: 1.0,
  });
  const fwdDot = new THREE.Mesh(new THREE.SphereGeometry(0.003, 4, 4), fwdDotMat);
  fwdDot.position.set(radarCenter.x, radarCenter.y + 0.003, radarCenter.z + RADAR_RADIUS + 0.005);
  fwdDot.userData.isRadarFwdDot = true;
  group.add(fwdDot);

  // "RADAR" label above the display
  const radarLabelPlane = makeTextPlane(
    group,
    radarCenter.x,
    radarCenter.y + 0.115,
    radarCenter.z,
    0.16,
    0.032,
    'radar',
  );
  radarLabelPlane.draw('RADAR');

  // Blip pool — blips are positioned in 3D using bearing + elevation
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

  /**
   * Update blip positions using bearing and elevation from each RadarBlip.
   * Blips are placed on the surface of an inner sphere (radius = RADAR_RADIUS * 0.88)
   * so their 3D position communicates both horizontal direction and vertical offset:
   *   bx = sin(bearing) * cos(elevation) * r   (left/right)
   *   by = sin(elevation) * r                  (above/below)
   *   bz = cos(bearing) * cos(elevation) * r   (ahead/behind)
   */
  function updateRadar(
    playerPos: THREE.Vector3,
    _playerQuat: THREE.Quaternion,
    blips: RadarBlip[],
  ): void {
    blipMeshes.forEach((b) => {
      b.visible = false;
    });

    const r = RADAR_RADIUS * 0.88;
    let idx = 0;

    for (const blip of blips) {
      if (idx >= MAX_BLIPS) break;
      if (blip.position.distanceTo(playerPos) > RADAR_RANGE) continue;

      const bx = Math.sin(blip.bearing) * Math.cos(blip.elevation) * r;
      const by = Math.sin(blip.elevation) * r;
      const bz = Math.cos(blip.bearing) * Math.cos(blip.elevation) * r;

      const blipMesh = blipMeshes[idx++];
      blipMesh.position.set(
        radarCenter.x + bx,
        radarCenter.y + by,
        radarCenter.z + bz,
      );
      blipMesh.visible = true;

      const color = blip.type === 'enemy' ? 0xff2200 : 0x888800;
      const mat = blipMesh.material as THREE.MeshLambertMaterial;
      mat.color.setHex(color);
      mat.emissive.setHex(color);
    }
  }

  let _credits = 0;

  function setCredits(amount: number): void {
    _credits = Math.max(0, amount);
    const text = `CREDITS  ${_credits}`;
    readoutTexts.credits = text;
    creditsTextPlane.draw(text);
  }

  function getReadoutText(key: 'health' | 'shields' | 'ammo' | 'credits' | 'weapon'): string {
    return readoutTexts[key] ?? '';
  }

  function update(dt: number): void {
    if (!_lowHealthActive) return;
    _warningPhase += dt;
    const on = (_warningPhase % BLINK_PERIOD) < BLINK_PERIOD / 2;
    warningLight.visible = on;
    warningLightMat.emissiveIntensity = on ? 1.5 : 0;
  }

  return {
    group,
    setHealth,
    setShield,
    setAmmo,
    setActiveWeapon,
    setCredits,
    update,
    updateRadar,
    getReadoutText,
  };
}
