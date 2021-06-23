// export interface ConvertEntity {
//   amount: number,
//   from: string,
//   to: string,
// } 


export class Convert {
  constructor(
    private readonly _amount: string,
    private readonly _from: string,
    private readonly _to: string,
    // private readonly _price: string,
  ) {}

  get amount(): string {
    return this._amount;
  }

  get from(): string {
    return this._from;
  }

  get to(): string {
    return this._to;
  }

  // get price(): string {
  //   return this._price;
  // }
}