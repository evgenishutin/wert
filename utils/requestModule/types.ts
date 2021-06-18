interface IPriceInfo {
  price: number,
  volume_24h: number,
  percent_change_1h: number,
  percent_change_24h: number,
  percent_change_7d: number,
  percent_change_30d: number,
  percent_change_60d: number,
  percent_change_90d: number,
  market_cap: number,
  last_updated: string
}

interface ICurrency {
  id: number,
  name: string,
  symbol: string,
  slug: string,
  num_market_pairs: number,
  date_added: string,
  tags: string[],
  max_supply: number,
  circulating_supply: number,
  total_supply: number,
  platform: null,
  cmc_rank: number,
  last_updated: string,
  quote: { [key: string]: IPriceInfo }
}

interface IBaseInfo {
  timestamp: string,
  error_code: number,
  error_message: null,
  elapsed: number,
  credit_count: number,
  notice: null,
  total_count?: number
}

interface IFiatInfo {
  id: number,
  name: string,
  sign: string,
  symbol: string,
}

export interface IQueryParams {
  start?: string,
  limit?: string,
  convert?: string
}

export interface ICurrenciesList {
  status: IBaseInfo,
  data: ICurrency[]
}

export interface ICurrencyConvert {
  status: IBaseInfo,
  data: { [key: string]: ICurrency }
}

export interface IFiatList extends IBaseInfo {
  data: IFiatInfo[]
}