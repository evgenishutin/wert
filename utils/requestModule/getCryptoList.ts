import { createRequest } from './request';
import { ICurrenciesList } from './types';

export const getCryptoCurrenciesList = async(): Promise<string[]> => {
  try {
    const prefixUri = '/cryptocurrency/listings/latest';
    const qs = { start: '1', limit: '5000' };

    const currencies: ICurrenciesList = await createRequest(prefixUri, qs);
    const result = currencies.data.map(i => i.symbol.toUpperCase().trim());
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};