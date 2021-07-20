import Big from 'big.js';
import { IConvert, ICurrncyClient } from "../interface";

export class Converting implements IConvert {
  constructor(
    private readonly client: ICurrncyClient
  ) {}
  async convert(from: string, to: string, amount: number): Promise<string> {
    const price = await this.client.createReuest(from, to);
    const result: Big = new Big(amount);
    return result.mul(price).toString();
  }
}