export class Services {
  private _name!: string;
  private _prise!: number;
  private _carWashLocation!: string;

  constructor() {
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get prise(): number {
    return this._prise;
  }

  set prise(value: number) {
    this._prise = value;
  }

  get carWashLocation(): string {
    return this._carWashLocation;
  }

  set carWashLocation(value: string) {
    this._carWashLocation = value;
  }
}

