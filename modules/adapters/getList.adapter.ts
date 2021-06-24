import { createRequest } from "../requestModule/request";
import { ICurrenciesList } from "../requestModule/types";

export class GetCurrensiesAdapter {
  async getList(nameList: string) {
    try {
      let prefixUri: string = '/cryptocurrency/listings/latest';
      let qs: any = { start: '1', limit: '5000' };

      if (nameList === 'fiat') {
        prefixUri = '/fiat/map';
        qs = {}
      }
      const coinsList: ICurrenciesList = await createRequest(prefixUri, qs);
      const result = coinsList.data.map(i => i.symbol.toUpperCase().trim());
      return result;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}