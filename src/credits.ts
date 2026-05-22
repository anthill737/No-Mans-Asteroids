export const ENEMY_CREDIT_MIN = 10;
export const ENEMY_CREDIT_MAX = 50;

export class CreditWallet {
  private _balance: number;

  constructor(initial = 0) {
    this._balance = Math.max(0, initial);
  }

  get balance(): number {
    return this._balance;
  }

  earn(amount: number): number {
    this._balance += Math.max(0, amount);
    return this._balance;
  }

  spend(amount: number): { success: boolean; balance: number } {
    if (amount > this._balance) {
      return { success: false, balance: this._balance };
    }
    this._balance -= amount;
    return { success: true, balance: this._balance };
  }
}
