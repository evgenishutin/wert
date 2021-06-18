import { createRequest } from './request';
import { IFiatList } from './types';

export const getFiatList = async(): Promise<string[]> => {
  try {
    const prefixUri = '/fiat/map';

    const fiatInfo: IFiatList = await createRequest(prefixUri);
    const result = fiatInfo.data.map(i => i.symbol.toUpperCase().trim());
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};