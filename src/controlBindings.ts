export const CONTROL_BINDINGS_STORAGE_KEY = 'spacegame_control_bindings_v1';

export type ControlAction =
  | 'thrustForward'
  | 'thrustBackward'
  | 'strafeLeft'
  | 'strafeRight'
  | 'rollLeft'
  | 'rollRight'
  | 'fireWeapon'
  | 'switchWeapon1'
  | 'switchWeapon2'
  | 'switchWeapon3'
  | 'strongBoost'
  | 'openSettings';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface ControlBindingRow {
  id: ControlAction | 'mousePitchYaw';
  label: string;
  binding: string;
  remappable: boolean;
  note?: string;
}

export interface ControlActionDefinition {
  id: ControlAction;
  label: string;
  defaultBinding: string;
}

export type ControlBindings = Record<ControlAction, string>;

export const CONTROL_ACTION_DEFINITIONS: ControlActionDefinition[] = [
  { id: 'thrustForward', label: 'Forward thrust', defaultBinding: 'w' },
  { id: 'thrustBackward', label: 'Back thrust', defaultBinding: 's' },
  { id: 'strafeLeft', label: 'Strafe left', defaultBinding: 'a' },
  { id: 'strafeRight', label: 'Strafe right', defaultBinding: 'd' },
  { id: 'rollLeft', label: 'Roll left', defaultBinding: 'q' },
  { id: 'rollRight', label: 'Roll right', defaultBinding: 'e' },
  { id: 'fireWeapon', label: 'Fire weapon', defaultBinding: 'mouse0' },
  { id: 'switchWeapon1', label: 'Switch weapon 1', defaultBinding: '1' },
  { id: 'switchWeapon2', label: 'Switch weapon 2', defaultBinding: '2' },
  { id: 'switchWeapon3', label: 'Switch weapon 3', defaultBinding: '3' },
  { id: 'strongBoost', label: 'Strong boost', defaultBinding: 'shift' },
  { id: 'openSettings', label: 'Open settings', defaultBinding: 'escape' },
];

export const DEFAULT_CONTROL_BINDINGS: ControlBindings = CONTROL_ACTION_DEFINITIONS.reduce(
  (bindings, action) => {
    bindings[action.id] = action.defaultBinding;
    return bindings;
  },
  {} as ControlBindings,
);

export function getControlActionLabel(action: ControlAction): string {
  return CONTROL_ACTION_DEFINITIONS.find((definition) => definition.id === action)?.label ?? action;
}

export function getDefaultControlBindings(): ControlBindings {
  return { ...DEFAULT_CONTROL_BINDINGS };
}

export function normalizeInputId(input: string): string {
  const trimmed = input.trim().toLowerCase();
  if (trimmed === ' ') return 'space';
  if (trimmed === 'spacebar') return 'space';
  if (trimmed === 'esc') return 'escape';
  if (trimmed === 'arrowup') return 'arrowup';
  if (trimmed === 'arrowdown') return 'arrowdown';
  if (trimmed === 'arrowleft') return 'arrowleft';
  if (trimmed === 'arrowright') return 'arrowright';
  if (trimmed === 'shiftleft' || trimmed === 'shiftright') return 'shift';
  if (trimmed.startsWith('key') && trimmed.length === 4) return trimmed.slice(3);
  if (trimmed.startsWith('digit') && trimmed.length === 6) return trimmed.slice(5);
  return trimmed;
}

export function keyboardEventToInputId(event: Pick<KeyboardEvent, 'key' | 'code'>): string {
  const key = normalizeInputId(event.key);
  if (key && key !== 'unidentified') return key;
  return normalizeInputId(event.code);
}

export function mouseButtonToInputId(button: number): string {
  return `mouse${button}`;
}

export function inputIdsMatch(actualInput: string, bindingInput: string): boolean {
  return normalizeInputId(actualInput) === normalizeInputId(bindingInput);
}

export function formatInputLabel(input: string): string {
  const normalized = normalizeInputId(input);
  const labels: Record<string, string> = {
    mouse0: 'Left Mouse',
    mouse1: 'Middle Mouse',
    mouse2: 'Right Mouse',
    shift: 'Shift',
    escape: 'Esc',
    space: 'Space',
    arrowup: 'Arrow Up',
    arrowdown: 'Arrow Down',
    arrowleft: 'Arrow Left',
    arrowright: 'Arrow Right',
  };
  if (labels[normalized]) return labels[normalized];
  if (normalized.length === 1) return normalized.toUpperCase();
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
}

export function loadControlBindings(
  storage: StorageLike = localStorage,
): ControlBindings {
  const defaults = getDefaultControlBindings();
  const raw = storage.getItem(CONTROL_BINDINGS_STORAGE_KEY);
  if (raw === null) return defaults;

  try {
    const parsed = JSON.parse(raw) as Partial<Record<ControlAction, unknown>>;
    const merged = { ...defaults };
    for (const action of CONTROL_ACTION_DEFINITIONS) {
      const stored = parsed[action.id];
      if (typeof stored === 'string' && stored.trim() !== '') {
        merged[action.id] = normalizeInputId(stored);
      }
    }

    return hasDuplicateBindings(merged) ? defaults : merged;
  } catch {
    return defaults;
  }
}

export function saveControlBindings(
  bindings: ControlBindings,
  storage: StorageLike = localStorage,
): void {
  storage.setItem(CONTROL_BINDINGS_STORAGE_KEY, JSON.stringify(normalizeBindings(bindings)));
}

export function resetControlBindings(storage: StorageLike = localStorage): ControlBindings {
  const defaults = getDefaultControlBindings();
  saveControlBindings(defaults, storage);
  return defaults;
}

export interface BindingConflict {
  action: ControlAction;
  label: string;
  binding: string;
}

export interface BindingChangeSuccess {
  success: true;
  bindings: ControlBindings;
}

export interface BindingChangeFailure {
  success: false;
  conflict: BindingConflict;
}

export type BindingChangeResult = BindingChangeSuccess | BindingChangeFailure;

export function setControlBinding(
  currentBindings: ControlBindings,
  action: ControlAction,
  input: string,
): BindingChangeResult {
  const normalizedInput = normalizeInputId(input);
  const conflict = findBindingConflict(currentBindings, action, normalizedInput);
  if (conflict) return { success: false, conflict };

  return {
    success: true,
    bindings: {
      ...currentBindings,
      [action]: normalizedInput,
    },
  };
}

export function findBindingConflict(
  bindings: ControlBindings,
  action: ControlAction,
  input: string,
): BindingConflict | null {
  const normalizedInput = normalizeInputId(input);
  for (const definition of CONTROL_ACTION_DEFINITIONS) {
    if (definition.id === action) continue;
    if (inputIdsMatch(bindings[definition.id], normalizedInput)) {
      return {
        action: definition.id,
        label: definition.label,
        binding: bindings[definition.id],
      };
    }
  }
  return null;
}

export function getControlRows(bindings: ControlBindings): ControlBindingRow[] {
  return [
    ...CONTROL_ACTION_DEFINITIONS.map((definition) => ({
      id: definition.id,
      label: definition.label,
      binding: bindings[definition.id],
      remappable: true,
    })),
    {
      id: 'mousePitchYaw',
      label: 'Pitch / yaw',
      binding: 'Mouse axes',
      remappable: false,
      note: 'Mouse axes are not remappable in this phase.',
    },
  ];
}

export function isKeyboardEventForAction(
  event: Pick<KeyboardEvent, 'key' | 'code'>,
  bindings: ControlBindings,
  action: ControlAction,
): boolean {
  return inputIdsMatch(keyboardEventToInputId(event), bindings[action]);
}

export function isMouseEventForAction(
  event: Pick<MouseEvent, 'button'>,
  bindings: ControlBindings,
  action: ControlAction,
): boolean {
  return inputIdsMatch(mouseButtonToInputId(event.button), bindings[action]);
}

export function isActionActive(
  activeInputs: Record<string, boolean>,
  bindings: ControlBindings,
  action: ControlAction,
): boolean {
  const binding = normalizeInputId(bindings[action]);
  return Object.keys(activeInputs).some((input) => activeInputs[input] && inputIdsMatch(input, binding));
}

function normalizeBindings(bindings: ControlBindings): ControlBindings {
  const normalized = {} as ControlBindings;
  for (const definition of CONTROL_ACTION_DEFINITIONS) {
    normalized[definition.id] = normalizeInputId(bindings[definition.id]);
  }
  return normalized;
}

function hasDuplicateBindings(bindings: ControlBindings): boolean {
  const seen = new Set<string>();
  for (const definition of CONTROL_ACTION_DEFINITIONS) {
    const binding = normalizeInputId(bindings[definition.id]);
    if (seen.has(binding)) return true;
    seen.add(binding);
  }
  return false;
}
