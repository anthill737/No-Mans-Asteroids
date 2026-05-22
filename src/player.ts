export class PlayerStats {
  health: number;
  shield: number;
  maxHealth: number;
  maxShield: number;
  thrustBonus: number;
  speedBonus: number;
  unlockedWeapons: Set<string>;

  constructor(maxHealth: number, maxShield: number) {
    this.maxHealth = maxHealth;
    this.maxShield = maxShield;
    this.health = maxHealth;
    this.shield = maxShield;
    this.thrustBonus = 0;
    this.speedBonus = 0;
    this.unlockedWeapons = new Set();
  }

  applyDamage(amount: number): { shieldDamage: number; hullDamage: number; isDead: boolean } {
    const dmg = Math.max(0, amount);
    const shieldAbsorbed = Math.min(this.shield, dmg);
    const overflow = dmg - shieldAbsorbed;
    this.shield -= shieldAbsorbed;
    const hullDamage = Math.min(this.health, overflow);
    this.health -= hullDamage;
    return { shieldDamage: shieldAbsorbed, hullDamage, isDead: this.health <= 0 };
  }

  reset(): void {
    this.health = this.maxHealth;
    this.shield = this.maxShield;
  }

  get isAlive(): boolean {
    return this.health > 0;
  }

  upgradeMaxHealth(amount: number): void {
    const bonus = Math.max(0, amount);
    this.maxHealth += bonus;
    this.health = Math.min(this.health + bonus, this.maxHealth);
  }

  upgradeMaxShield(amount: number): void {
    const bonus = Math.max(0, amount);
    this.maxShield += bonus;
    this.shield = Math.min(this.shield + bonus, this.maxShield);
  }

  upgradeEngine(thrustAmount: number, speedAmount: number): void {
    this.thrustBonus += Math.max(0, thrustAmount);
    this.speedBonus += Math.max(0, speedAmount);
  }

  unlockWeapon(name: string): void {
    this.unlockedWeapons.add(name);
  }
}
