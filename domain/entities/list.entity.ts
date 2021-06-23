export class List {
  constructor(
    private readonly _list: string[],
  ) {}

  get list(): string[] {
    return this._list;
  }
}