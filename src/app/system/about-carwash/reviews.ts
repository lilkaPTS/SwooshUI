export class Reviews {
  username!: string;
  text!: string;
  carWashLocation!: string;

  constructor() {
  }

  public getNameCustomer(): string {
    return this.username;
  }

  public getText(): string {
    return this.text;
  }

  public getLocation(): string {
    return this.carWashLocation;
  }
}
