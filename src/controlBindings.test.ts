import { describe, expect, it, vi } from 'vitest';
import * as THREE from 'three';
import { FlightController } from './flight';
import {
  CONTROL_BINDINGS_STORAGE_KEY,
  DEFAULT_CONTROL_BINDINGS,
  getControlRows,
  loadControlBindings,
  saveControlBindings,
  setControlBinding,
} from './controlBindings';

function createMemoryStorage(initial: Record<string, string> = {}) {
  const data = { ...initial };
  return {
    data,
    getItem: vi.fn((key: string) => data[key] ?? null),
    setItem: vi.fn((key: string, value: string) => {
      data[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete data[key];
    }),
  };
}

describe('control bindings', () => {
  it('lists all required controls and marks mouse axes as non-remappable', () => {
    const rows = getControlRows(DEFAULT_CONTROL_BINDINGS);

    expect(rows.map((row) => row.label)).toEqual(expect.arrayContaining([
      'Forward thrust',
      'Back thrust',
      'Strafe left',
      'Strafe right',
      'Roll left',
      'Roll right',
      'Pitch / yaw',
      'Fire weapon',
      'Switch weapon 1',
      'Switch weapon 2',
      'Switch weapon 3',
      'Strong boost',
      'Open settings',
    ]));

    expect(rows.find((row) => row.id === 'mousePitchYaw')).toMatchObject({
      remappable: false,
      note: 'Mouse axes are not remappable in this phase.',
    });
  });

  it('rebinding thrust writes localStorage and makes only the new key fire the action', () => {
    const storage = createMemoryStorage();
    const change = setControlBinding(DEFAULT_CONTROL_BINDINGS, 'thrustForward', 'i');
    expect(change.success).toBe(true);
    if (!change.success) return;

    saveControlBindings(change.bindings, storage);

    const stored = JSON.parse(storage.data[CONTROL_BINDINGS_STORAGE_KEY]);
    expect(stored.thrustForward).toBe('i');

    const reloaded = loadControlBindings(storage);
    const oldKeyController = new FlightController(reloaded);
    oldKeyController.setKey('w', true);
    oldKeyController.update(1 / 60, new THREE.Euler(0, 0, 0, 'YXZ'), new THREE.Vector3());
    expect(oldKeyController.velocity.z).toBe(0);

    const newKeyController = new FlightController(reloaded);
    newKeyController.setKey('i', true);
    newKeyController.update(1 / 60, new THREE.Euler(0, 0, 0, 'YXZ'), new THREE.Vector3());
    expect(newKeyController.velocity.z).toBeLessThan(0);
  });

  it('rejects a duplicate binding and does not save the conflict', () => {
    const storage = createMemoryStorage();
    const change = setControlBinding(DEFAULT_CONTROL_BINDINGS, 'thrustForward', DEFAULT_CONTROL_BINDINGS.strafeLeft);

    expect(change.success).toBe(false);
    if (change.success) return;

    expect(change.conflict.action).toBe('strafeLeft');
    expect(storage.setItem).not.toHaveBeenCalled();
    expect(DEFAULT_CONTROL_BINDINGS.thrustForward).toBe('w');
  });
});
