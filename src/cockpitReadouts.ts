export const COCKPIT_READOUT_NODE_NAMES = [
  'HEALTH',
  'SHIELDS',
  'AMMO',
  'CREDITS',
  'WEAPON',
  'LOW_HEALTH_WARNING',
  'RADAR',
  'CONTACTS',
  'BOOST',
  'SPEED',
  'SPEED_NUMERIC',
  'SPEED_GAUGE',
] as const;

export type CockpitReadoutNodeName = typeof COCKPIT_READOUT_NODE_NAMES[number];

export type CockpitReadoutKey =
  | 'health'
  | 'shields'
  | 'ammo'
  | 'credits'
  | 'weapon'
  | 'radar'
  | 'boost'
  | 'speed';

export const COCKPIT_READOUT_NODE_BY_KEY: Record<CockpitReadoutKey, CockpitReadoutNodeName> = {
  health: 'HEALTH',
  shields: 'SHIELDS',
  ammo: 'AMMO',
  credits: 'CREDITS',
  weapon: 'WEAPON',
  radar: 'RADAR',
  boost: 'BOOST',
  speed: 'SPEED',
};
