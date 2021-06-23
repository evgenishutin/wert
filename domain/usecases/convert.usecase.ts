import { ConvertPort } from "../ports/convert.port";

export class ConvertUseCase {
  constructor(
    private readonly _port: ConvertPort,
  ) {}

  async convert(amount: number, from: string, to: string): Promise<string> {
    return await this._port.convert(amount, from, to);
  }
}