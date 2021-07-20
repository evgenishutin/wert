import { ICache } from "../domain/interface";

export class Cache implements ICache {
  get(pair: string): number {
    throw new Error("Method not implemented.");
  }
  set(pair: string, price: number): void {
    throw new Error("Method not implemented.");
  }
}