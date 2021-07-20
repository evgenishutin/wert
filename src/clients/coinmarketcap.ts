import rp from 'request-promise';
import dotenv from 'dotenv';
import { ICurrncyClient } from "../domain/interface";
import { IResponseCoinMarketcap } from './types';

dotenv.config();

const { API_KEY } = process.env;
const baseUri = 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion';

export class Convert implements ICurrncyClient {
  async createReuest(from: string, to: string): Promise<number> {
    const optionsConfig = {
      method: 'GET',
      uri: baseUri,
      qs: {
        symbol: from,
        convert: to,
        amount: 1,
      },
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY || '',
      },
      json: true,
      gzip: true
    };
    const result: IResponseCoinMarketcap = await rp(optionsConfig);
    return result.data.quote[`${to.toUpperCase()}`].price;
  }
}