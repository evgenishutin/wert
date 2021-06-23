import { ListPort } from "../../domain/ports/getCurrencies.port";
import { createRequest } from "../../utils/requestModule/request";
import { IFiatList } from "../../utils/requestModule/types";

export class GetCurrensiesAdapter implements ListPort {
  async getList(prefixUri: string, qs: any) {
    try {
      const fiatInfo: IFiatList = await createRequest(prefixUri, qs);
      const result = fiatInfo.data.map(i => i.symbol.toUpperCase().trim());
      return result;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}
