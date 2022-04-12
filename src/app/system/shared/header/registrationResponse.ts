export class registrationRequest {
  email! : string;
  name!: string;
  password! : string;

  constructor() {
  }

  public setEmail(p_email : string) {
    this.email = p_email;
  }

  public getEmail() : string {
    return this.email;
  }

  public setPassword(p_Password : string) {
    this.password = p_Password;
  }

  public getPassword() : string {
    return this.password;
  }

  public setName(p_name : string) {
    this.name = p_name;
  }

  public getName() : string {
    return this.name;
  }
}
