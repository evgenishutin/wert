export interface IResponseCoinMarketcap {
  status: {
    timestamp: string,
    error_code: number,
    error_message: null,
    elapsed: number,
    credit_count: number,
    notice: null
  },
  data: {
    id: number,
    symbol: string,
    name: string,
    amount: number,
    last_updated: string,
    quote: { [key: string]: IFiat }
  }
}

interface IFiat {
  price: number,
  last_updated: string
}