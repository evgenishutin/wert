import rp from 'request-promise';
import { IQueryParams } from './types';
import dotenv from 'dotenv';

dotenv.config();

const { API_KEY } = process.env;
const baseUri = 'https://pro-api.coinmarketcap.com/v1';

export const createRequest = async(prefixUri: string, queryParams: IQueryParams = {}) => {
  try {
    const optionsConfig = {
      method: 'GET',
      uri: `${baseUri}${prefixUri}`,
      qs: queryParams,
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY || '',
      },
      json: true,
      gzip: true
    };
    const result = await rp(optionsConfig);
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};