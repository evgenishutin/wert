import { Price } from "../entities/price.entity";
import { ConvertPort } from "../ports/convert.port";

export class ConvertUseCase extends Price {
  constructor(
    private readonly _port: ConvertPort,
  ) {
    super();
  }

  async convert(amount: number, from: string, to: string): Promise<string> {
    this.price = await this._port.convert(amount, from, to);
    return this.price;
  }
}