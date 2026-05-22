declare module 'yuka' {
  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number): this;
    copy(v: Vector3): this;
    add(v: Vector3): this;
    addScaledVector(v: Vector3, s: number): this;
    sub(v: Vector3): this;
    multiplyScalar(s: number): this;
    normalize(): this;
    length(): number;
    distanceTo(v: Vector3): number;
    clone(): Vector3;
  }

  export class GameEntity {
    position: Vector3;
    rotation: { x: number; y: number; z: number; w: number };
    update(delta: number): this;
  }

  export class MovingEntity extends GameEntity {
    velocity: Vector3;
    maxSpeed: number;
  }

  export class Vehicle extends MovingEntity {
    maxForce: number;
    steering: SteeringManager;
  }

  export class SteeringManager {
    add(behavior: SteeringBehavior): this;
    remove(behavior: SteeringBehavior): this;
  }

  export class SteeringBehavior {
    active: boolean;
    weight: number;
  }

  export class PursuitBehavior extends SteeringBehavior {
    evader: MovingEntity | null;
    predictionFactor: number;
    constructor(evader?: MovingEntity | null, predictionFactor?: number);
  }

  export class EvadeBehavior extends SteeringBehavior {
    pursuer: MovingEntity | null;
    panicDistance: number;
    predictionFactor: number;
    constructor(pursuer?: MovingEntity | null);
  }

  export class EntityManager {
    add(entity: GameEntity): this;
    remove(entity: GameEntity): this;
    update(delta: number): this;
  }
}
