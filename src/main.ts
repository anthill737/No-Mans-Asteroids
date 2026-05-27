import * as THREE from 'three';
import { computeRadarContacts, createCockpitMesh } from './cockpit';
import { setupPointerLock } from './pointerlock';
import { FlightController, getNormalMaxForwardSpeed, getStrongBoostMaxForwardSpeed } from './flight';
import { generateSector, SectorObjects } from './sector';
import { LaserSystem } from './laser';
import { ChaingunSystem } from './weapons/chaingun';
import { MissileSystem } from './weapons/missile';
import { handleAsteroidDestroyed } from './asteroid';
import { PlayerStats } from './player';
import { EnemyAISystem, ENEMY_PROJECTILE_DAMAGE } from './enemy';
import { CreditWallet } from './credits';
import { createGameOverScreen } from './gameover';
import { createCrosshair } from './crosshair';
import { GameAudio } from './audio/gameAudio';
import { EngineAudio } from './audio/engineAudio';
import { LandingSystem, LANDING_THRESHOLD } from './landing';
import { createSurfaceScene, SurfaceController, SurfaceScene, SURFACE_EYE_HEIGHT } from './surface';
import { WarpSystem, getSectorName, checkBlackHoleProximity } from './warp';
import { StoreUI, STORE_X, STORE_Z, STORE_INTERACTION_RADIUS, purchaseItem } from './store';
import {
  createLoadLastSaveHandler,
  createSaveNowHandler,
  loadGame,
  saveGame,
  type GameSaveState,
} from './saveLoad';
import { CAMERA_NEAR, CAMERA_FAR, createSpaceFog } from './cameraConfig';
import { renderFrame } from './renderDispatch';
import { createHowlerSoundVolumeLayer, createSettingsOverlay } from './settings';
import { collectDamageableSpaceTargets, handleDamageableSpaceHit } from './weapons/targeting';
import { AMMO_CAPACITY } from './ammoConfig';
import {
  ControlBindings,
  isKeyboardEventForAction,
  isMouseEventForAction,
  loadControlBindings,
} from './controlBindings';
import {
  applyLoadout as applyShipLoadout,
  composeShip,
  DEFAULT_SHIP_LOADOUT,
  normalizeShipLoadout,
  positionShipForFpv,
  type ShipLoadout,
  type ShipLoadoutInput,
} from './shipParts';

const PLAYER_MAX_HEALTH = 100;
const PLAYER_MAX_SHIELD = 100;
const RETURN_INVINCIBILITY_DURATION = 4.0;

// Spawn looking slightly upward so the ship cockpit (y≈2, z=-12) sits near
// screen centre. Positive euler.x = looking up in Three.js YXZ convention.
const SURFACE_SPAWN_PITCH = 0.15; // radians — positive = looking up

// Distance within which the store approach hint appears (wider than interaction radius)
const STORE_APPROACH_HINT_RADIUS = 20;

type ActiveWeapon = 'laser' | 'chaingun' | 'missile';
type SceneMode = 'space' | 'surface';

// ── Space scene ────────────────────────────────────────────────────────────────
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000005);
scene.fog = createSpaceFog();

const ambient = new THREE.AmbientLight(0x445577, 2.5);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffeedd, 2.5);
sun.position.set(5, 8, -3);
scene.add(sun);

// ── Space camera (owns the cockpit HUD, stays in space scene) ─────────────────
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  CAMERA_NEAR,
  CAMERA_FAR,
);

const cockpitFillLight = new THREE.PointLight(0xffffff, 1.2, 3.0);
cockpitFillLight.position.set(0, 0.3, -0.6);
camera.add(cockpitFillLight);

const hud = createCockpitMesh();
camera.add(hud.group);
let currentLoadout: ShipLoadout = { ...DEFAULT_SHIP_LOADOUT };
const fpvShip = composeShip(
  currentLoadout.cockpit,
  currentLoadout.wings,
  currentLoadout.hull,
);
positionShipForFpv(fpvShip);
camera.add(fpvShip);
hud.bindToCockpit(fpvShip);
scene.add(camera);

// ── Surface camera (standalone — NOT added to any scene so Three.js will
//    always auto-update its world matrix when rendering the surface scene) ─────
const surfaceCamera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  CAMERA_NEAR,
  CAMERA_FAR,
);

// ── Crosshair ──────────────────────────────────────────────────────────────────
createCrosshair();

// ── Star field ─────────────────────────────────────────────────────────────────
const starCount = 2000;
const starPositions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount; i++) {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);
  const r = 800 + Math.random() * 200;
  starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  starPositions[i * 3 + 2] = r * Math.cos(phi);
}
const starGeo = new THREE.BufferGeometry();
starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 1.5 })));

// ── Renderer ───────────────────────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// ── Landing fade overlay ───────────────────────────────────────────────────────
const fadeEl = document.createElement('div');
Object.assign(fadeEl.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'black',
  opacity: '0',
  pointerEvents: 'none',
  zIndex: '100',
  transition: 'none',
});
document.body.appendChild(fadeEl);

// ── On-surface proximity HUD hint ──────────────────────────────────────────────
const shipHintEl = document.createElement('div');
Object.assign(shipHintEl.style, {
  position: 'fixed',
  bottom: '10%',
  width: '100%',
  textAlign: 'center',
  color: '#ffdd88',
  fontFamily: 'monospace',
  fontSize: '18px',
  pointerEvents: 'none',
  zIndex: '50',
  opacity: '0',
  textShadow: '0 0 8px #ff8800',
});
shipHintEl.textContent = '▲ Walk to your ship ahead to launch ▲';
document.body.appendChild(shipHintEl);

// ── Store proximity hint ───────────────────────────────────────────────────────
const storeHintEl = document.createElement('div');
Object.assign(storeHintEl.style, {
  position: 'fixed',
  top: '20%',
  width: '100%',
  textAlign: 'center',
  color: '#00ccff',
  fontFamily: 'monospace',
  fontSize: '16px',
  pointerEvents: 'none',
  zIndex: '50',
  opacity: '0',
  textShadow: '0 0 8px #0088cc',
  letterSpacing: '2px',
});
storeHintEl.textContent = '⬡  SUPPLY DEPOT nearby';
document.body.appendChild(storeHintEl);

// ── Invincibility flash overlay ────────────────────────────────────────────────
const invincibleEl = document.createElement('div');
Object.assign(invincibleEl.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0,200,255,0.15)',
  opacity: '0',
  pointerEvents: 'none',
  zIndex: '90',
  transition: 'none',
});
document.body.appendChild(invincibleEl);

// ── Warp flash overlay ─────────────────────────────────────────────────────────
const warpEl = document.createElement('div');
Object.assign(warpEl.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(80,140,255,0.9) 40%, rgba(0,20,80,0.95) 100%)',
  opacity: '0',
  pointerEvents: 'none',
  zIndex: '200',
  transition: 'none',
});
document.body.appendChild(warpEl);

// ── Sector name overlay ────────────────────────────────────────────────────────
const sectorNameEl = document.createElement('div');
Object.assign(sectorNameEl.style, {
  position: 'fixed',
  top: '30%',
  width: '100%',
  textAlign: 'center',
  color: '#88ccff',
  fontFamily: 'monospace',
  fontSize: '28px',
  letterSpacing: '4px',
  textTransform: 'uppercase',
  pointerEvents: 'none',
  zIndex: '150',
  opacity: '0',
  textShadow: '0 0 20px #4488ff, 0 0 40px #2244ff',
});
document.body.appendChild(sectorNameEl);

// ── Credits display overlay ────────────────────────────────────────────────────
const creditsEl = document.createElement('div');
Object.assign(creditsEl.style, {
  position: 'fixed',
  top: '12px',
  right: '16px',
  color: '#00ffcc',
  fontFamily: 'monospace',
  fontSize: '16px',
  pointerEvents: 'none',
  zIndex: '50',
  textShadow: '0 0 8px #00cc99',
  letterSpacing: '1px',
});
creditsEl.textContent = '⬡ 0 CR';
document.body.appendChild(creditsEl);

// ── Audio ──────────────────────────────────────────────────────────────────────
const gameAudio = new GameAudio();
const engineAudio = new EngineAudio();

// ── Input ──────────────────────────────────────────────────────────────────────
const euler = new THREE.Euler(0, 0, 0, 'YXZ');
let controlBindings: ControlBindings = loadControlBindings();
const flight = new FlightController(controlBindings);
flight.attach();

// ── Game objects ───────────────────────────────────────────────────────────────
const player = new PlayerStats(PLAYER_MAX_HEALTH, PLAYER_MAX_SHIELD);
const wallet = new CreditWallet(0);
const laser = new LaserSystem(scene, AMMO_CAPACITY.laser);
const chaingun = new ChaingunSystem(scene, AMMO_CAPACITY.chaingun);
const missiles = new MissileSystem(scene, AMMO_CAPACITY.missile);
let activeWeapon: ActiveWeapon = 'laser';
let isMouseDown = false;
let sectorObjects: SectorObjects = generateSector(scene, Math.floor(Math.random() * 0xffffffff));
let enemyAI = new EnemyAISystem(scene, sectorObjects.enemies);
let isGameOver = false;

// ── Landing system ─────────────────────────────────────────────────────────────
const landingSystem = new LandingSystem();
let sceneMode: SceneMode = 'space';
let currentSurface: SurfaceScene | null = null;
let surfaceController: SurfaceController | null = null;
let savedSpacePosition: THREE.Vector3 | null = null;
let landedPlanet: THREE.Mesh | null = null;
let returnInvincibilityTimer = 0;

// ── Store surface state ────────────────────────────────────────────────────────
// True once the player explicitly dismisses the panel — prevents immediate re-open.
// Resets when the player walks out of the approach radius.
let storeDismissed = false;

function applyLoadout(newLoadout: ShipLoadoutInput): void {
  currentLoadout = normalizeShipLoadout(newLoadout);
  applyShipLoadout(currentLoadout, fpvShip);
  positionShipForFpv(fpvShip);
  hud.bindToCockpit(fpvShip);
  syncHudWithLiveState();
}

const runtimeWindow = window as Window & {
  spaceGame?: {
    applyLoadout?: (loadout: ShipLoadoutInput) => ShipLoadout;
    getLoadout?: () => ShipLoadout;
  };
};
runtimeWindow.spaceGame = {
  ...runtimeWindow.spaceGame,
  applyLoadout: (loadout: ShipLoadoutInput) => {
    applyLoadout(loadout);
    return { ...currentLoadout };
  },
  getLoadout: () => ({ ...currentLoadout }),
};

// ── Store UI (surface only) ────────────────────────────────────────────────────
const storeUI = new StoreUI(
  () => { storeDismissed = true; },
  (item) => {
    const result = purchaseItem(item, wallet, player);
    if (result.success) {
      gameAudio.playStorePurchase();
      updateCreditsDisplay();
      hud.setHealth(player.health / player.maxHealth);
      hud.setShield(player.shield / player.maxShield);
      // Sync engine upgrade bonuses into FlightController so they take effect immediately.
      flight.thrustBonus = player.thrustBonus;
      flight.speedBonus = player.speedBonus;
      if (item.category === 'ammo' && item.ammoAmount !== undefined) {
        if (item.ammoType === 'laser') laser.addAmmo(item.ammoAmount);
        else if (item.ammoType === 'chaingun') chaingun.addAmmo(item.ammoAmount);
        else if (item.ammoType === 'missile') missiles.addAmmo(item.ammoAmount);
        updateHudAmmo();
      }
    }
    return result;
  },
);

// ── Warp system ────────────────────────────────────────────────────────────────
const warpSystem = new WarpSystem(1);

function setWalletBalance(credits: number): void {
  wallet.spend(wallet.balance);
  wallet.earn(credits);
}

function clearSectorObjects(): void {
  sectorObjects.asteroids.forEach((a) => scene.remove(a));
  scene.remove(sectorObjects.blackHole);
  sectorObjects.enemies.forEach((e) => scene.remove(e));
  sectorObjects.planets.forEach((p) => scene.remove(p));
  enemyAI.reset();
}

function resetSurfaceStateForLoad(): void {
  const wasSurfaceMode = sceneMode === 'surface';
  if (surfaceController) {
    surfaceController.detach();
    surfaceController = null;
  }
  currentSurface = null;
  sceneMode = 'space';
  if (wasSurfaceMode) flight.attach();
  storeUI.hide();
  storeDismissed = false;
  storeHintEl.style.opacity = '0';
  shipHintEl.style.opacity = '0';
  fadeEl.style.opacity = '0';
  landingSystem.state = 'space';
  landingSystem.fadeAlpha = 0;
  savedSpacePosition = null;
  landedPlanet = null;
  returnInvincibilityTimer = 0;
  invincibleEl.style.opacity = '0';
}

function applySaveState(state: GameSaveState, resetGameOver = false): void {
  resetSurfaceStateForLoad();

  applyLoadout(state.loadout);
  setWalletBalance(state.credits);
  player.maxHealth = state.hullUpgrade + PLAYER_MAX_HEALTH;
  player.maxShield = state.shieldUpgrade + PLAYER_MAX_SHIELD;
  player.health = Math.min(state.health, player.maxHealth);
  player.shield = Math.min(state.shield, player.maxShield);
  player.thrustBonus = state.engineThrustBonus;
  player.speedBonus = state.engineSpeedBonus;
  player.unlockedWeapons.clear();
  state.unlockedWeapons.forEach((w) => player.unlockedWeapons.add(w));
  laser.reset(state.laserAmmo);
  chaingun.reset(state.chaingunAmmo);
  missiles.reset(state.missileAmmo);
  flight.thrustBonus = player.thrustBonus;
  flight.speedBonus = player.speedBonus;
  warpSystem.reset(state.sectorId);

  clearSectorObjects();
  sectorObjects = generateSector(scene, state.sectorId);
  enemyAI = new EnemyAISystem(scene, sectorObjects.enemies);

  camera.position.set(0, 0, 0);
  euler.set(0, 0, 0);
  flight.reset();
  clearLiveInput();

  hud.setHealth(player.health / player.maxHealth);
  hud.setShield(player.shield / player.maxShield);
  updateHudAmmo();
  hud.setCredits(wallet.balance);
  hud.setSpeed(flight.velocity, getNormalMaxForwardSpeed(flight.speedBonus), getNormalMaxForwardSpeed(flight.speedBonus));
  creditsEl.textContent = `⬡ ${wallet.balance} CR`;
  warpEl.style.opacity = '0';
  sectorNameEl.style.opacity = '0';
  sectorNameEl.textContent = getSectorName(warpSystem.sectorId);

  if (resetGameOver) {
    isGameOver = false;
    gameOverScreen.hide();
  }
}

// ── Restore save (if present) ─────────────────────────────────────────────────
const savedState = loadGame();
if (savedState !== null) {
  applySaveState(savedState);
}

hud.setHealth(player.health / player.maxHealth);
hud.setShield(player.shield / player.maxShield);
hud.setAmmo(laser.ammo, laser.maxAmmo);
hud.setActiveWeapon('laser');
hud.setCredits(wallet.balance);
hud.setBoostActive(false);
hud.setSpeed(flight.velocity, getNormalMaxForwardSpeed(flight.speedBonus), getNormalMaxForwardSpeed(flight.speedBonus));
creditsEl.textContent = `⬡ ${wallet.balance} CR`;

function updateCreditsDisplay(): void {
  hud.setCredits(wallet.balance);
  creditsEl.textContent = `⬡ ${wallet.balance} CR`;
}

function updateHudAmmo(): void {
  if (activeWeapon === 'laser') {
    hud.setAmmo(laser.ammo, laser.maxAmmo);
  } else if (activeWeapon === 'chaingun') {
    hud.setAmmo(chaingun.ammo, chaingun.maxAmmo);
  } else {
    hud.setAmmo(missiles.ammo, missiles.maxAmmo);
  }
}

function syncHudWithLiveState(): void {
  hud.setHealth(player.health / player.maxHealth);
  hud.setShield(player.shield / player.maxShield);
  updateHudAmmo();
  hud.setActiveWeapon(activeWeapon);
  hud.setCredits(wallet.balance);

  const boostAllowed = warpSystem.state === 'idle';
  const boostActive = flight.isStrongBoostEngaged(boostAllowed);
  const normalMaxSpeed = getNormalMaxForwardSpeed(flight.speedBonus);
  const currentMaxSpeed = boostActive
    ? getStrongBoostMaxForwardSpeed(flight.speedBonus)
    : normalMaxSpeed;
  hud.setBoostActive(boostActive);
  hud.setSpeed(flight.velocity, normalMaxSpeed, currentMaxSpeed);

  const radarContacts = computeRadarContacts(
    sectorObjects.enemies,
    camera.position,
    camera.quaternion,
  );
  hud.updateRadar(camera.position, camera.quaternion, radarContacts);
}

function buildSaveState(): GameSaveState {
  return {
    credits: wallet.balance,
    sectorId: warpSystem.sectorId,
    health: player.health,
    shield: player.shield,
    shieldUpgrade: player.maxShield - PLAYER_MAX_SHIELD,
    hullUpgrade: player.maxHealth - PLAYER_MAX_HEALTH,
    engineThrustBonus: player.thrustBonus,
    engineSpeedBonus: player.speedBonus,
    unlockedWeapons: [...player.unlockedWeapons],
    laserAmmo: laser.ammo,
    chaingunAmmo: chaingun.ammo,
    missileAmmo: missiles.ammo,
    loadout: { ...currentLoadout },
  };
}

/** Awards credits for a destroyed enemy and updates the cockpit display. */
function onEnemyDestroyed(enemyMesh: THREE.Mesh): void {
  const creditValue = (enemyMesh.userData.creditValue as number | undefined) ?? 0;
  wallet.earn(creditValue);
  updateCreditsDisplay();
}

/** Removes a dead enemy from the scene and sector list, awarding credits. */
function removeDeadEnemy(enemyMesh: THREE.Mesh): void {
  onEnemyDestroyed(enemyMesh);
  scene.remove(enemyMesh);
  sectorObjects.enemies = sectorObjects.enemies.filter((e) => e !== enemyMesh);
}

// ── Restart ────────────────────────────────────────────────────────────────────
function restartGame(): void {
  settingsMenu.close();

  if (sceneMode === 'surface') {
    if (surfaceController) { surfaceController.detach(); surfaceController = null; }
    currentSurface = null;
    flight.attach();
    sceneMode = 'space';
  }

  storeUI.hide();
  storeDismissed = false;
  storeHintEl.style.opacity = '0';

  sectorObjects.asteroids.forEach((a) => scene.remove(a));
  scene.remove(sectorObjects.blackHole);
  sectorObjects.enemies.forEach((e) => scene.remove(e));
  sectorObjects.planets.forEach((p) => scene.remove(p));

  enemyAI.reset();
  sectorObjects = generateSector(scene, Math.floor(Math.random() * 0xffffffff));
  enemyAI = new EnemyAISystem(scene, sectorObjects.enemies);

  player.reset();
  hud.setHealth(player.health / player.maxHealth);
  hud.setShield(player.shield / player.maxShield);

  laser.reset(AMMO_CAPACITY.laser);
  chaingun.reset(AMMO_CAPACITY.chaingun);
  missiles.reset(AMMO_CAPACITY.missile);
  gameAudio.stopChaingunChatter();
  engineAudio.stopAll();
  gameAudio.resetLowHealthWarning();
  activeWeapon = 'laser';
  isMouseDown = false;
  applyLoadout(DEFAULT_SHIP_LOADOUT);
  updateHudAmmo();
  hud.setActiveWeapon('laser');
  hud.setBoostActive(false);
  hud.setSpeed(flight.velocity, getNormalMaxForwardSpeed(flight.speedBonus), getNormalMaxForwardSpeed(flight.speedBonus));

  camera.position.set(0, 0, 0);
  euler.set(0, 0, 0);
  flight.reset();

  fadeEl.style.opacity = '0';
  shipHintEl.style.opacity = '0';
  shipHintEl.textContent = '▲ Walk to your ship ahead to launch ▲';
  invincibleEl.style.opacity = '0';
  returnInvincibilityTimer = 0;
  landedPlanet = null;

  warpSystem.reset(1);
  warpEl.style.opacity = '0';
  sectorNameEl.style.opacity = '0';
  sectorNameEl.textContent = '';

  isGameOver = false;
  gameOverScreen.hide();
  renderer.domElement.requestPointerLock();
}

const gameOverScreen = createGameOverScreen(restartGame);

function clearLiveInput(): void {
  isMouseDown = false;
  flight.clearInput();
  surfaceController?.clearInput();
  hud.setBoostActive(false);
}

const handleSaveNow = createSaveNowHandler({
  getState: buildSaveState,
});

const handleLoadLastSave = createLoadLastSaveHandler({
  getCurrentState: buildSaveState,
  applyState: (state) => {
    applySaveState(state, true);
  },
});

let masterVolumeScale = 1;
let sfxVolumeScale = 1;
const syncGeneratedSfxVolume = (): void => {
  gameAudio.setSfxVolumeScale(masterVolumeScale * sfxVolumeScale);
};

const settingsMenu = createSettingsOverlay({
  controlBindings,
  onControlBindingsChange: (bindings) => {
    controlBindings = bindings;
    flight.setBindings(controlBindings);
    clearLiveInput();
  },
  sound: {
    volumeLayer: createHowlerSoundVolumeLayer({
      master: (scale) => {
        masterVolumeScale = scale;
        syncGeneratedSfxVolume();
      },
      sfx: (scale) => {
        sfxVolumeScale = scale;
        syncGeneratedSfxVolume();
      },
      engine: (scale) => {
        engineAudio.setVolumeScale(scale);
      },
    }),
  },
  ship: {
    getLoadout: () => ({ ...currentLoadout }),
    onApplyLoadout: (loadout) => {
      gameAudio.playUIClick();
      applyLoadout(loadout);
      saveGame(buildSaveState());
      return { ...currentLoadout };
    },
  },
  onOpen: () => {
    clearLiveInput();
    gameAudio.stopChaingunChatter();
    engineAudio.stopAll();
    if (document.pointerLockElement === renderer.domElement) document.exitPointerLock();
    gameAudio.playUIClick();
  },
  onClose: () => {
    clearLiveInput();
    gameAudio.playUIClick();
  },
  onTabChange: () => {
    gameAudio.playUIClick();
  },
  onSaveNow: () => {
    gameAudio.playUIClick();
    return handleSaveNow();
  },
  onLoadLastSave: () => {
    gameAudio.playUIClick();
    return handleLoadLastSave();
  },
});

// ── Pointer lock ───────────────────────────────────────────────────────────────
setupPointerLock(renderer.domElement, (dx, dy) => {
  if (isGameOver) return;
  if (settingsMenu.isOpen) return;
  const ls = landingSystem.state;
  if (ls === 'landing-fadeout' || ls === 'surface-fadein') return;
  const sensitivity = 0.002;
  euler.y -= dx * sensitivity;
  euler.x -= dy * sensitivity;
  euler.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, euler.x));
  if (sceneMode === 'surface') euler.z = 0;
});

// ── Unlock AudioContext on first user interaction ──────────────────────────────
document.addEventListener('mousedown', () => gameAudio.resume(), { once: true });
document.addEventListener('keydown', () => gameAudio.resume(), { once: true });

// ── Weapon switch ──────────────────────────────────────────────────────────────
function selectWeapon(weapon: ActiveWeapon): void {
  activeWeapon = weapon;
  if (weapon !== 'chaingun') gameAudio.stopChaingunChatter();
  updateHudAmmo();
  hud.setActiveWeapon(weapon);
  gameAudio.playUIClick();
}

document.addEventListener('keydown', (e) => {
  if (isGameOver) return;
  if (settingsMenu.isOpen) return;
  if (sceneMode !== 'space') return;
  if (isKeyboardEventForAction(e, controlBindings, 'switchWeapon1')) {
    selectWeapon('laser');
  } else if (isKeyboardEventForAction(e, controlBindings, 'switchWeapon2')) {
    selectWeapon('chaingun');
  } else if (isKeyboardEventForAction(e, controlBindings, 'switchWeapon3')) {
    selectWeapon('missile');
  }
});

// ── Settings / store dismiss ───────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (!isKeyboardEventForAction(e, controlBindings, 'openSettings')) return;
  e.preventDefault();

  if (settingsMenu.isOpen) {
    settingsMenu.close();
  } else if (storeUI.isOpen) {
    storeUI.dismiss(); // sets storeDismissed = true via onDismiss callback
    gameAudio.playUIClick();
  } else if (!isGameOver) {
    settingsMenu.open();
  }
});

// ── Manual save via F5 ────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (settingsMenu.isOpen) return;
  if (e.key === 'F5' && !isGameOver) {
    e.preventDefault();
    saveGame(buildSaveState());
  }
});

// ── Firing ─────────────────────────────────────────────────────────────────────
function canUseWeaponInput(): boolean {
  if (settingsMenu.isOpen) return false;
  if (document.pointerLockElement !== renderer.domElement) return false;
  if (isGameOver) return false;
  if (sceneMode !== 'space') return false;
  return true;
}

function fireCurrentWeaponOnce(): void {
  if (activeWeapon === 'laser') {
    const allTargets = collectDamageableSpaceTargets(sectorObjects);
    const result = laser.fire(camera.position, camera.quaternion, allTargets);
    if (result.fired) {
      gameAudio.playLaserZap();
      hud.setAmmo(result.ammoRemaining, laser.maxAmmo);

      if (result.hit && result.hitObject) {
        const isEnemy = sectorObjects.enemies.includes(result.hitObject);
        if (result.hitObject.userData.health <= 0) {
          if (isEnemy) {
            gameAudio.playEnemyDestroy();
            removeDeadEnemy(result.hitObject);
          } else {
            gameAudio.playAsteroidDestroy();
            sectorObjects.asteroids = handleAsteroidDestroyed(
              scene,
              result.hitObject,
              sectorObjects.asteroids,
            );
          }
        } else {
          if (isEnemy) {
            gameAudio.playEnemyHit();
          } else {
            gameAudio.playAsteroidHit();
          }
        }
      }
    }
  } else if (activeWeapon === 'missile') {
    const result = missiles.fire(camera.position, camera.quaternion);
    if (result.fired) {
      gameAudio.playMissileWhoosh();
      hud.setAmmo(result.ammoRemaining, missiles.maxAmmo);
    }
  }
}

document.addEventListener('mousedown', (e) => {
  if (!isMouseEventForAction(e, controlBindings, 'fireWeapon')) return;
  if (!canUseWeaponInput()) return;

  isMouseDown = true;
  fireCurrentWeaponOnce();
});

document.addEventListener('keydown', (e) => {
  if (!isKeyboardEventForAction(e, controlBindings, 'fireWeapon')) return;
  if (!canUseWeaponInput()) return;

  e.preventDefault();
  isMouseDown = true;
  if (!e.repeat) fireCurrentWeaponOnce();
});

document.addEventListener('mouseup', (e) => {
  if (!isMouseEventForAction(e, controlBindings, 'fireWeapon')) return;
  isMouseDown = false;
});

document.addEventListener('keyup', (e) => {
  if (!isKeyboardEventForAction(e, controlBindings, 'fireWeapon')) return;
  isMouseDown = false;
});

window.addEventListener('resize', () => {
  const aspect = window.innerWidth / window.innerHeight;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  surfaceCamera.aspect = aspect;
  surfaceCamera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ── Game loop ──────────────────────────────────────────────────────────────────
let lastTime = performance.now();

function animate(): void {
  requestAnimationFrame(animate);

  const now = performance.now();
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;

  if (settingsMenu.isOpen) {
    if (sceneMode === 'surface' && currentSurface) {
      renderFrame(renderer, 'surface', scene, camera, currentSurface.scene, surfaceCamera);
    } else {
      renderFrame(renderer, 'space', scene, camera, null, surfaceCamera);
    }
    return;
  }

  if (returnInvincibilityTimer > 0) {
    returnInvincibilityTimer = Math.max(0, returnInvincibilityTimer - dt);
    invincibleEl.style.opacity = String(returnInvincibilityTimer / RETURN_INVINCIBILITY_DURATION * 0.4);
  }

  // ── Landing state machine ──────────────────────────────────────────────────
  const { switchToSurface, switchToSpace, onSurface } = landingSystem.update(dt);
  fadeEl.style.opacity = String(landingSystem.fadeAlpha);

  if (onSurface) {
    euler.set(SURFACE_SPAWN_PITCH, 0, 0);
    surfaceCamera.rotation.copy(euler);
  }

  if (switchToSurface) {
    const planetPos = landedPlanet ? landedPlanet.position : (savedSpacePosition ?? new THREE.Vector3());
    const seed = Math.abs(Math.floor(planetPos.x * 100 + planetPos.z * 100)) % 0xffffff || 42;
    currentSurface = createSurfaceScene(seed, currentLoadout);
    surfaceController = new SurfaceController(seed);
    surfaceController.attach();
    flight.detach();

    surfaceCamera.position.set(0, SURFACE_EYE_HEIGHT, 0);
    euler.set(SURFACE_SPAWN_PITCH, 0, 0);
    surfaceCamera.rotation.copy(euler);
    surfaceCamera.updateMatrixWorld(true);

    sceneMode = 'surface';
    shipHintEl.textContent = '▲ Walk to your ship ahead to launch ▲';
    shipHintEl.style.opacity = '1';

    // Reset store state for fresh surface visit
    storeUI.hide();
    storeDismissed = false;
    storeHintEl.style.opacity = '0';
  }

  if (switchToSpace) {
    if (surfaceController) { surfaceController.detach(); surfaceController = null; }
    currentSurface = null;
    flight.attach();

    // Ensure store panel is hidden when leaving surface
    storeUI.hide();
    storeDismissed = false;
    storeHintEl.style.opacity = '0';

    if (landedPlanet && savedSpacePosition) {
      const geo = landedPlanet.geometry as THREE.SphereGeometry;
      const planetRadius = geo.parameters?.radius ?? 20;
      const dir = savedSpacePosition.clone().sub(landedPlanet.position).normalize();
      const safeDistance = planetRadius + LANDING_THRESHOLD + 40;
      camera.position.copy(landedPlanet.position).addScaledVector(dir, safeDistance);
    } else if (savedSpacePosition) {
      camera.position.copy(savedSpacePosition);
    }

    euler.set(0, 0, 0);
    flight.reset();
    sceneMode = 'space';
    shipHintEl.style.opacity = '0';
    landedPlanet = null;

    returnInvincibilityTimer = RETURN_INVINCIBILITY_DURATION;
  }

  // ── Space mode ─────────────────────────────────────────────────────────────
  if (sceneMode === 'space') {
    camera.rotation.copy(euler);

    if (!isGameOver && landingSystem.state === 'space') {
      const nearPlanet = landingSystem.checkProximity(camera.position, sectorObjects.planets);

      if (nearPlanet) {
        savedSpacePosition = camera.position.clone();
        landedPlanet = nearPlanet;
        landingSystem.beginLanding(sectorObjects);
        gameAudio.stopChaingunChatter();
        engineAudio.stopAll();
        isMouseDown = false;
      } else {
        const boostAllowed = warpSystem.state === 'idle';
        flight.update(dt, euler, camera.position, { boostAllowed });
        const boostActive = flight.isStrongBoostEngaged(boostAllowed);
        const normalMaxSpeed = getNormalMaxForwardSpeed(flight.speedBonus);
        const currentMaxSpeed = boostActive
          ? getStrongBoostMaxForwardSpeed(flight.speedBonus)
          : normalMaxSpeed;
        engineAudio.update({
          inSpace: !isGameOver && sceneMode === 'space' && landingSystem.state === 'space',
          onSurface: false,
          inWarp: warpSystem.state !== 'idle',
          thrustMagnitude: flight.getThrustInputMagnitude(),
          boostActive,
        }, dt);
        hud.setBoostActive(boostActive);
        hud.setSpeed(flight.velocity, normalMaxSpeed, currentMaxSpeed);
        camera.rotation.copy(euler);
        laser.update();

        const isFiringChaingun = isMouseDown && activeWeapon === 'chaingun';

        const chaingunTargets = collectDamageableSpaceTargets(sectorObjects);
        const chaingunResults = chaingun.update(
          dt,
          isFiringChaingun,
          camera.position,
          camera.quaternion,
          chaingunTargets,
        );

        if (isFiringChaingun && chaingunResults.some((r) => r.fired)) {
          gameAudio.startChaingunChatter();
        } else if (!isFiringChaingun) {
          gameAudio.stopChaingunChatter();
        }

        for (const result of chaingunResults) {
          if (result.fired) {
            hud.setAmmo(result.ammoRemaining, chaingun.maxAmmo);
            handleDamageableSpaceHit(result, sectorObjects, {
              onAsteroidHit: () => gameAudio.playAsteroidHit(),
              onAsteroidDestroyed: (asteroid) => {
                gameAudio.playAsteroidDestroy();
                sectorObjects.asteroids = handleAsteroidDestroyed(
                  scene,
                  asteroid,
                  sectorObjects.asteroids,
                );
              },
              onEnemyHit: () => gameAudio.playEnemyHit(),
              onEnemyDestroyed: (enemy) => {
                gameAudio.playEnemyDestroy();
                removeDeadEnemy(enemy);
              },
            });
          }
        }

        const missileTargets = collectDamageableSpaceTargets(sectorObjects);
        const missileHits = missiles.update(dt, missileTargets);

        for (const hit of missileHits) {
          gameAudio.playMissileExplosion();
          const isEnemy = sectorObjects.enemies.includes(hit.hitObject);
          if (hit.hitObject.userData.health <= 0) {
            if (isEnemy) {
              gameAudio.playEnemyDestroy();
              removeDeadEnemy(hit.hitObject);
            } else {
              gameAudio.playAsteroidDestroy();
              sectorObjects.asteroids = handleAsteroidDestroyed(
                scene,
                hit.hitObject,
                sectorObjects.asteroids,
              );
            }
          } else if (isEnemy) {
            gameAudio.playEnemyHit();
          } else {
            gameAudio.playAsteroidHit();
          }
        }

        if (activeWeapon === 'missile' && missileHits.length > 0) {
          hud.setAmmo(missiles.ammo, missiles.maxAmmo);
        }

        enemyAI.update(dt, camera.position);
        if (returnInvincibilityTimer <= 0 && enemyAI.checkPlayerHit(camera.position)) {
          const { isDead } = player.applyDamage(ENEMY_PROJECTILE_DAMAGE);
          hud.setHealth(player.health / player.maxHealth);
          hud.setShield(player.shield / player.maxShield);
          gameAudio.checkLowHealth(player.health / player.maxHealth, dt);
          if (isDead) {
            isGameOver = true;
            gameAudio.stopChaingunChatter();
            engineAudio.stopAll();
            gameOverScreen.show();
            document.exitPointerLock();
          }
        }

        // ── Black hole warp check ────────────────────────────────────────────
        if (warpSystem.canWarp() && checkBlackHoleProximity(camera.position, sectorObjects.blackHole)) {
          warpSystem.beginWarp();
          gameAudio.playWarpActivation();
          gameAudio.stopChaingunChatter();
          engineAudio.stopAll();
          hud.setBoostActive(false);
          isMouseDown = false;
        }
      }
    } else {
      hud.setBoostActive(false);
    }

    // ── Warp state machine update ──────────────────────────────────────────────
    if (!isGameOver) {
      const { warpNow } = warpSystem.update(dt);
      if (warpNow) {
        sectorObjects.asteroids.forEach((a) => scene.remove(a));
        scene.remove(sectorObjects.blackHole);
        sectorObjects.enemies.forEach((e) => scene.remove(e));
        sectorObjects.planets.forEach((p) => scene.remove(p));
        enemyAI.reset();

        sectorObjects = generateSector(scene, warpSystem.sectorId);
        enemyAI = new EnemyAISystem(scene, sectorObjects.enemies);

        camera.position.set(0, 0, 0);
        euler.set(0, 0, 0);
        flight.reset();

        sectorNameEl.textContent = getSectorName(warpSystem.sectorId);

        // Auto-save on sector warp to capture progress
        saveGame(buildSaveState());
      }
      warpEl.style.opacity = String(warpSystem.flashAlpha);
      sectorNameEl.style.opacity = String(warpSystem.nameAlpha);
    }

    const radarContacts = computeRadarContacts(
      sectorObjects.enemies,
      camera.position,
      camera.quaternion,
    );
    hud.updateRadar(camera.position, camera.quaternion, radarContacts);

    renderFrame(renderer, 'space', scene, camera, null, surfaceCamera);

  // ── Surface mode ───────────────────────────────────────────────────────────
  } else if (sceneMode === 'surface' && currentSurface && surfaceController) {
    engineAudio.update({
      inSpace: false,
      onSurface: true,
      inWarp: false,
      thrustMagnitude: 0,
      boostActive: false,
    }, dt);

    euler.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, euler.x));
    surfaceCamera.rotation.copy(euler);

    // ── Store proximity ────────────────────────────────────────────────────────
    const sdx = surfaceCamera.position.x - STORE_X;
    const sdz = surfaceCamera.position.z - STORE_Z;
    const distToStore = Math.sqrt(sdx * sdx + sdz * sdz);
    const nearStore = distToStore <= STORE_INTERACTION_RADIUS;
    const approachingStore = distToStore <= STORE_APPROACH_HINT_RADIUS;

    // Reset dismissed flag once the player leaves the approach radius
    if (!approachingStore && storeDismissed) {
      storeDismissed = false;
    }

    // Auto-open panel when entering interaction radius
    if (nearStore && !storeDismissed && !storeUI.isOpen) {
      storeUI.show();
      gameAudio.playUIClick();
      document.exitPointerLock();
    }

    // Auto-close panel when the player walks away
    if (!nearStore && storeUI.isOpen) {
      storeUI.hide();
    }

    // Show approach hint when nearby but panel not open
    storeHintEl.style.opacity = (approachingStore && !storeUI.isOpen) ? '1' : '0';

    // ── Ship proximity / movement (block launch when store is open) ───────────
    const { nearShip, launchRequested } = surfaceController.update(dt, surfaceCamera.position, euler);

    // Update ship hint (hidden while store panel is open)
    if (storeUI.isOpen) {
      shipHintEl.style.opacity = '0';
    } else {
      shipHintEl.textContent = nearShip
        ? '[ E ]  Launch'
        : '▲ Walk to your ship to launch ▲';
      shipHintEl.style.opacity = '1';
    }

    if (launchRequested && !storeUI.isOpen && landingSystem.state === 'on-surface') {
      landingSystem.beginLaunch(sectorObjects);
    }

    renderFrame(renderer, 'surface', scene, camera, currentSurface.scene, surfaceCamera);
  }
}

animate();
