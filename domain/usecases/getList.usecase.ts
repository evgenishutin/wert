import { CurrenciesPort } from "../ports/getCurrencies.port";
import { List } from '../entities/list.entity';

export class ListUseCase extends List {
  constructor(
    private readonly _port: CurrenciesPort
  ) {
    super();
  }

  async getList(nameList: string) {
    this.list = await this._port.getList(nameList);
    return this.list;
  }
}