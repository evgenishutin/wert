import { createRequest } from "../../utils/requestModule/request";
import { ICurrencyConvert } from "../../utils/requestModule/types";
import { ConvertPort } from '../../domain/ports/convert.port';

export class ConvertCurrency implements ConvertPort {
  async convert(amount: number, from: string, to: string) {
    try {
      const prefixUri = '/cryptocurrency/quotes/latest';
      const qs = { symbol: from, convert: to };
  
      if (from === to) return String(amount);
  
      const currency: ICurrencyConvert = await createRequest(prefixUri, qs);
      const result: number = currency.data[`${from.toUpperCase()}`].quote[`${to.toUpperCase()}`].price;
      const sum = amount * result;
      return sum.toFixed(5);
    } catch (err) {
      console.error(err);
      return '0';
    }
  }
}