export const AMMO_TYPES = ['laser', 'chaingun', 'missile'] as const;

export type AmmoType = (typeof AMMO_TYPES)[number];

export const P9_AMMO_CAPACITY: Record<AmmoType, number> = {
  laser: 30,
  chaingun: 120,
  missile: 8,
};

export const AMMO_CAPACITY: Record<AmmoType, number> = {
  laser: 45,
  chaingun: 180,
  missile: 12,
};

export const P9_AMMO_RESUPPLY: Record<AmmoType, number> = {
  laser: 30,
  chaingun: 120,
  missile: 5,
};

export const AMMO_RESUPPLY: Record<AmmoType, number> = {
  laser: 45,
  chaingun: 180,
  missile: 8,
};
