export class Reviews {
  nameCustomer!: string;
  text!: string;

  constructor() {
  }

  public getNameCustomer(): string {
    return this.nameCustomer;
  }

  public getText(): string {
    return this.text;
  }

}
