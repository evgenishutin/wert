export interface CurrenciesPort {
  getList(nameList: string): Promise<string[]>;
}