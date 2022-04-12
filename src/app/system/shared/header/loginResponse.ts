export class LoginRequest {
  email! : string;
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
}

export interface ILoginResponse {
  email: string;
  token: string;
  role: string;
}

export class LoginResponse {

  private _email : string = "";
  private _role : string = "";
  private _token : string = "";

  constructor() {
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
