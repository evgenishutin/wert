import { createRequest } from './request';
import { ICurrencyConvert } from './types';

export const converting = async(amount: number = 0, from: string = '', to: string = ''): Promise<string> => {
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
};