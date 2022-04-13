export class Services {
  name!: string;
  price!: any;
  carWashLocation!: string;

  constructor() {
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): any {
    return this.price;
  }

  public getLocation(): string {
    return this.carWashLocation;
  }
}

