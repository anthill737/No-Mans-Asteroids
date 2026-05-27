import * as THREE from 'three';
import { CreditWallet } from './credits';
import { PlayerStats } from './player';
import { AMMO_RESUPPLY } from './ammoConfig';

// ── Store placement constants ─────────────────────────────────────────────────
export const STORE_X = 15;
export const STORE_Z = -8;
export const STORE_INTERACTION_RADIUS = 8;

export interface StoreItem {
  name: string;
  desc: string;
  cost: number;
  category: 'ammo' | 'weapon' | 'upgrade';
  ammoType?: 'laser' | 'chaingun' | 'missile';
  ammoAmount?: number;
  upgradeType?: 'shields' | 'engine' | 'hull';
  upgradeBonus?: number;
  engineThrustBonus?: number;
  engineSpeedBonus?: number;
}

export const STORE_ITEMS: StoreItem[] = [
  // ── Ammo resupply ────────────────────────────────────────────────────────────
  { name: 'Laser Ammo Pack',     desc: `+${AMMO_RESUPPLY.laser} laser capacitor shots.`,    cost:  150, category: 'ammo', ammoType: 'laser',    ammoAmount: AMMO_RESUPPLY.laser },
  { name: 'Chaingun Ammo Crate', desc: `+${AMMO_RESUPPLY.chaingun} high-calibre rounds.`,     cost:  200, category: 'ammo', ammoType: 'chaingun', ammoAmount: AMMO_RESUPPLY.chaingun },
  { name: 'Missile Rack',        desc: `+${AMMO_RESUPPLY.missile} proximity-fused warheads.`,  cost:  300, category: 'ammo', ammoType: 'missile',  ammoAmount: AMMO_RESUPPLY.missile },
  // ── Weapons ──────────────────────────────────────────────────────────────────
  { name: 'Plasma Cannon',       desc: 'Experimental arc-discharge weapon.', cost: 1200, category: 'weapon' },
  // ── Shield upgrades (3 tiers) ────────────────────────────────────────────────
  { name: 'Shield Array I',   desc: '+25 maximum shield HP.',  cost:  400, category: 'upgrade', upgradeType: 'shields', upgradeBonus: 25 },
  { name: 'Shield Array II',  desc: '+50 maximum shield HP.',  cost:  800, category: 'upgrade', upgradeType: 'shields', upgradeBonus: 50 },
  { name: 'Shield Array III', desc: '+75 maximum shield HP.',  cost: 1500, category: 'upgrade', upgradeType: 'shields', upgradeBonus: 75 },
  // ── Engine upgrades (3 tiers) ────────────────────────────────────────────────
  { name: 'Engine Boost I',   desc: '+5 thrust, +5 top speed.',   cost:  400, category: 'upgrade', upgradeType: 'engine', engineThrustBonus: 5,  engineSpeedBonus: 5 },
  { name: 'Engine Boost II',  desc: '+8 thrust, +8 top speed.',   cost:  800, category: 'upgrade', upgradeType: 'engine', engineThrustBonus: 8,  engineSpeedBonus: 8 },
  { name: 'Engine Boost III', desc: '+12 thrust, +12 top speed.', cost: 1500, category: 'upgrade', upgradeType: 'engine', engineThrustBonus: 12, engineSpeedBonus: 12 },
  // ── Hull upgrades (3 tiers) ──────────────────────────────────────────────────
  { name: 'Hull Plating I',   desc: '+25 maximum hull HP.',   cost:  400, category: 'upgrade', upgradeType: 'hull', upgradeBonus: 25 },
  { name: 'Hull Plating II',  desc: '+50 maximum hull HP.',   cost:  800, category: 'upgrade', upgradeType: 'hull', upgradeBonus: 50 },
  { name: 'Hull Plating III', desc: '+75 maximum hull HP.',   cost: 1500, category: 'upgrade', upgradeType: 'hull', upgradeBonus: 75 },
];

export interface PurchaseResult {
  success: boolean;
}

/**
 * Attempt to buy an item from the store.
 * Deducts cost from wallet. For upgrade items, applies the stat change to player.
 * For weapon items, adds the weapon name to player.unlockedWeapons.
 * Returns { success: false } without modifying anything when credits are insufficient.
 */
export function purchaseItem(
  item: StoreItem,
  wallet: CreditWallet,
  player?: PlayerStats,
): PurchaseResult {
  const { success } = wallet.spend(item.cost);
  if (!success) return { success: false };

  if (player) {
    if (item.category === 'weapon') {
      player.unlockWeapon(item.name);
    } else if (item.category === 'upgrade') {
      if (item.upgradeType === 'shields' && item.upgradeBonus !== undefined) {
        player.upgradeMaxShield(item.upgradeBonus);
      } else if (item.upgradeType === 'hull' && item.upgradeBonus !== undefined) {
        player.upgradeMaxHealth(item.upgradeBonus);
      } else if (item.upgradeType === 'engine') {
        player.upgradeEngine(item.engineThrustBonus ?? 0, item.engineSpeedBonus ?? 0);
      }
    }
  }

  return { success: true };
}

/**
 * Builds the store building group.
 * The optional terrainFn is used by the runtime to snap the building to terrain;
 * tests call with one arg (defaults to flat ground at y=0).
 */
export function buildStoreBuilding(
  seed: number,
  terrainFn: (x: number, z: number, seed: number) => number = () => 0,
): THREE.Group {
  const group = new THREE.Group();
  const groundH = terrainFn(STORE_X, STORE_Z, seed);

  const bodyMat  = new THREE.MeshLambertMaterial({ color: 0x1a2f50, flatShading: true });
  const roofMat  = new THREE.MeshLambertMaterial({ color: 0x0d1f38, flatShading: true });
  const poleMat  = new THREE.MeshBasicMaterial({ color: 0x001a40 });
  const signMat  = new THREE.MeshBasicMaterial({ color: 0x0044bb });
  const glowMat  = new THREE.MeshBasicMaterial({ color: 0x00eeff });
  const ringMat  = new THREE.MeshBasicMaterial({ color: 0x003388 });

  // Main building body
  const bodyGeo = new THREE.BoxGeometry(8, 5, 8);
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.set(STORE_X, groundH + 2.5, STORE_Z);
  group.add(body);

  // Flat roof canopy
  const roofGeo = new THREE.BoxGeometry(10, 0.5, 10);
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.set(STORE_X, groundH + 5.25, STORE_Z);
  group.add(roof);

  // Sign tower pole
  const poleGeo = new THREE.CylinderGeometry(0.3, 0.3, 12, 6);
  const pole = new THREE.Mesh(poleGeo, poleMat);
  pole.position.set(STORE_X + 5.5, groundH + 6, STORE_Z);
  group.add(pole);

  // Sign board
  const signGeo = new THREE.BoxGeometry(4.5, 1.6, 0.3);
  const sign = new THREE.Mesh(signGeo, signMat);
  sign.position.set(STORE_X + 5.5, groundH + 12, STORE_Z);
  group.add(sign);

  // Cyan beacon orb on sign tower top
  const orbGeo = new THREE.SphereGeometry(0.55, 8, 6);
  const orb = new THREE.Mesh(orbGeo, glowMat);
  orb.position.set(STORE_X + 5.5, groundH + 13.2, STORE_Z);
  group.add(orb);

  // Ground interaction-range ring
  const rangeRingGeo = new THREE.TorusGeometry(STORE_INTERACTION_RADIUS, 0.25, 6, 48);
  const rangeRing = new THREE.Mesh(rangeRingGeo, ringMat);
  rangeRing.rotation.x = Math.PI / 2;
  rangeRing.position.set(STORE_X, groundH + 0.12, STORE_Z);
  group.add(rangeRing);

  // Blue and cyan point lights
  const blueLight = new THREE.PointLight(0x0088ff, 25, 70);
  blueLight.position.set(STORE_X, groundH + 8, STORE_Z);
  group.add(blueLight);

  const cyanLight = new THREE.PointLight(0x00ccff, 10, 30);
  cyanLight.position.set(STORE_X + 5.5, groundH + 13, STORE_Z);
  group.add(cyanLight);

  return group;
}

export class StoreUI {
  private readonly panel: HTMLDivElement;
  private _isOpen = false;

  constructor(
    private readonly onDismiss?: () => void,
    private readonly onBuyAttempt?: (item: StoreItem) => PurchaseResult,
  ) {
    this.panel = this._buildPanel();
    document.body.appendChild(this.panel);
  }

  get isOpen(): boolean { return this._isOpen; }

  show(): void {
    this._isOpen = true;
    this.panel.style.display = 'flex';
  }

  hide(): void {
    this._isOpen = false;
    this.panel.style.display = 'none';
  }

  /** Player-initiated close — hides the panel and fires the dismiss callback. */
  dismiss(): void {
    this.hide();
    this.onDismiss?.();
  }

  destroy(): void {
    this.panel.remove();
  }

  private _buildPanel(): HTMLDivElement {
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      display: 'none',
      position: 'fixed',
      top: '0', left: '0',
      width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.78)',
      zIndex: '500',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'monospace',
    });

    const panel = document.createElement('div');
    Object.assign(panel.style, {
      background: 'rgba(4,16,36,0.97)',
      border: '2px solid #00aaff',
      borderRadius: '8px',
      padding: '32px 36px',
      minWidth: '540px',
      maxWidth: '700px',
      color: '#cce4ff',
      boxShadow: '0 0 48px rgba(0,160,255,0.35)',
      position: 'relative',
      maxHeight: '85vh',
      overflowY: 'auto',
    });

    // ── Close button (top-right) ──────────────────────────────────────────────
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    Object.assign(closeBtn.style, {
      position: 'absolute',
      top: '12px',
      right: '14px',
      background: 'transparent',
      border: '1px solid #004488',
      borderRadius: '4px',
      color: '#0077cc',
      fontSize: '16px',
      cursor: 'pointer',
      fontFamily: 'monospace',
      padding: '2px 8px',
      lineHeight: '1.4',
    });
    closeBtn.title = 'Close (ESC)';
    closeBtn.addEventListener('mouseenter', () => { closeBtn.style.color = '#00ccff'; closeBtn.style.borderColor = '#0099ee'; });
    closeBtn.addEventListener('mouseleave', () => { closeBtn.style.color = '#0077cc'; closeBtn.style.borderColor = '#004488'; });
    closeBtn.addEventListener('click', () => this.dismiss());
    panel.appendChild(closeBtn);

    const title = document.createElement('div');
    title.textContent = '⬡  SUPPLY DEPOT';
    Object.assign(title.style, {
      fontSize: '22px',
      letterSpacing: '5px',
      color: '#00ccff',
      textAlign: 'center',
      marginBottom: '6px',
      textShadow: '0 0 14px #0077cc',
    });
    panel.appendChild(title);

    const sub = document.createElement('div');
    sub.textContent = 'Weapons, Munitions & Ship Upgrades';
    Object.assign(sub.style, {
      fontSize: '12px',
      color: '#336688',
      textAlign: 'center',
      marginBottom: '24px',
      letterSpacing: '2px',
    });
    panel.appendChild(sub);

    // Group items by category for display
    const sections: Array<{ label: string; filter: (i: StoreItem) => boolean }> = [
      { label: 'MUNITIONS', filter: (i) => i.category === 'ammo' || i.category === 'weapon' },
      { label: 'SHIP UPGRADES — SHIELDS',  filter: (i) => i.category === 'upgrade' && i.upgradeType === 'shields' },
      { label: 'SHIP UPGRADES — ENGINE',   filter: (i) => i.category === 'upgrade' && i.upgradeType === 'engine' },
      { label: 'SHIP UPGRADES — HULL',     filter: (i) => i.category === 'upgrade' && i.upgradeType === 'hull' },
    ];

    for (const section of sections) {
      const items = STORE_ITEMS.filter(section.filter);
      if (items.length === 0) continue;

      const sectionLabel = document.createElement('div');
      sectionLabel.textContent = section.label;
      Object.assign(sectionLabel.style, {
        fontSize: '11px',
        color: '#005577',
        letterSpacing: '3px',
        marginBottom: '8px',
        marginTop: '16px',
        borderBottom: '1px solid #002244',
        paddingBottom: '4px',
      });
      panel.appendChild(sectionLabel);

      for (const item of items) {
        panel.appendChild(this._buildItemRow(item));
      }
    }

    const hint = document.createElement('div');
    hint.textContent = '[ ESC ] or ✕ to close';
    Object.assign(hint.style, {
      textAlign: 'center',
      marginTop: '22px',
      fontSize: '12px',
      color: '#334455',
      letterSpacing: '1px',
    });
    panel.appendChild(hint);

    overlay.appendChild(panel);
    return overlay;
  }

  private _buildItemRow(item: StoreItem): HTMLDivElement {
    const row = document.createElement('div');
    Object.assign(row.style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(0,40,80,0.55)',
      border: '1px solid #003366',
      borderRadius: '4px',
      padding: '12px 14px',
      marginBottom: '10px',
      gap: '16px',
    });

    const info = document.createElement('div');
    info.style.flex = '1';

    const name = document.createElement('div');
    name.textContent = item.name;
    Object.assign(name.style, {
      fontSize: '15px',
      color: '#ddeeff',
      marginBottom: '4px',
      fontWeight: 'bold',
    });

    const desc = document.createElement('div');
    desc.textContent = item.desc;
    Object.assign(desc.style, {
      fontSize: '12px',
      color: '#5588aa',
    });

    info.appendChild(name);
    info.appendChild(desc);

    const right = document.createElement('div');
    Object.assign(right.style, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '6px',
      flexShrink: '0',
    });

    const cost = document.createElement('div');
    cost.textContent = `${item.cost.toLocaleString()} ₢`;
    Object.assign(cost.style, {
      fontSize: '15px',
      color: '#ffdd44',
      whiteSpace: 'nowrap',
    });

    const btn = document.createElement('button');
    btn.textContent = 'BUY';
    Object.assign(btn.style, {
      background: 'rgba(0,60,100,0.85)',
      border: '1px solid #0055aa',
      borderRadius: '3px',
      color: '#00aaff',
      padding: '4px 14px',
      cursor: 'pointer',
      fontFamily: 'monospace',
      fontSize: '12px',
      letterSpacing: '1px',
      opacity: '1',
    });
    btn.addEventListener('mouseenter', () => {
      btn.style.background = 'rgba(0,80,140,0.9)';
      btn.style.borderColor = '#0088cc';
      btn.style.color = '#44ccff';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = 'rgba(0,60,100,0.85)';
      btn.style.borderColor = '#0055aa';
      btn.style.color = '#00aaff';
    });
    btn.addEventListener('click', () => {
      const result = this.onBuyAttempt ? this.onBuyAttempt(item) : { success: false };
      if (result.success) {
        btn.textContent = 'PURCHASED';
        btn.style.color = '#00ff88';
        btn.style.borderColor = '#00aa55';
        btn.style.background = 'rgba(0,60,30,0.85)';
      } else {
        btn.textContent = 'NEED CREDITS';
        btn.style.color = '#ff6644';
        btn.style.borderColor = '#aa2200';
        btn.style.background = 'rgba(60,10,0,0.85)';
      }
      setTimeout(() => {
        btn.textContent = 'BUY';
        btn.style.color = '#00aaff';
        btn.style.borderColor = '#0055aa';
        btn.style.background = 'rgba(0,60,100,0.85)';
      }, 1500);
    });

    right.appendChild(cost);
    right.appendChild(btn);
    row.appendChild(info);
    row.appendChild(right);

    return row;
  }
}
