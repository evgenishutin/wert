export interface IQuestion {
  name: string,
  type: string,
  choices?: string[] | [],
  message: string,
  initial?: string,
  limit?: string,
}

export interface IAnswer {
  from?: string,
  to?: string,
  amount? : number,
}