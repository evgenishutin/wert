export interface IConvert {
  convert(from: string, to: string, amount: number): Promise<string>;
}

export interface ICurrncyClient {
  createReuest(from: string, to: string): Promise<number>;
}

export interface ICache {
  get(pair: string): number,
  set(pair: string, price: number): void,
}