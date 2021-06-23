import { ListPort } from "../ports/getCurrencies.port";

export class List {
  constructor(
    private readonly _port: ListPort
  ) {}

  async getList(prefix: string, qs: any) {
    return await this._port.getList(prefix, qs);
  }
}