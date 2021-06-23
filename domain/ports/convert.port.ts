export interface ConvertPort {
  convert(amount: number, from: string, to: string): Promise<string>;
}