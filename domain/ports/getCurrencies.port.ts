export interface ListPort {
  getList(prefix: string, qs: any): Promise<string[]>;
}