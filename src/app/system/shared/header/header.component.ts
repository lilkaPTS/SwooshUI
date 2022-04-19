import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginResponse} from "./loginResponse";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForm!: FormGroup;
  formRegistration!: FormGroup;
  formCode!: FormGroup;

  public showCode: boolean = false;

  private baseUrl = 'http://localhost:8080';

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient
              ) {

  }

  ngOnInit() {
    this.formRegistration = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmedPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      code: new FormControl('', Validators.required)
    });
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {

  }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type' : 'application/json'
        //'Authorization' : 'TOKEN ИЗ LOCALSTORAGE'
      }
    )
  }

  login(): void {
    // let loginRequest: LoginRequest = new LoginRequest();
    // loginRequest.email=this.form.value.email;
    // loginRequest.password=this.form.value.password;

    let request = {"email":this.loginForm.value.email, "password":this.loginForm.value.password};
    this.http.post<LoginResponse>(`${this.baseUrl}/api/auth/login`, JSON.stringify(request), this.httpOptions).subscribe((data:LoginResponse) => {
      if(data.role=="CUSTOMER") {
        this.router.navigate(["/personal-account-client"]);
      } else if (data.role=="ADMIN"){
        this.router.navigate(["/personal-account-admin"]);
      }
    });
  }


  registration(): void {
    let request = {"email":this.formRegistration.value.email, "password":this.formRegistration.value.password, "name":this.formRegistration.value.name};
    this.http.post<boolean>(`${this.baseUrl}/api/reg/createUser`, JSON.stringify(request), this.httpOptions).subscribe((data: boolean) => {
      if (data) {
        this.showCode = true;
      } else {
        this.showCode = false;
      }
    })
  }

  confirmCode(): void {
    let code: FormData = new FormData();
    code.append('email', this.formRegistration.value.email);
    code.append('code', this.formRegistration.value.code);
    console.log(code);
    this.http.put<boolean>(`${this.baseUrl}/api/reg/checkConfirmation`, code).subscribe((data: boolean) => {
      if (data == true) {
        this.router.navigate(["/personal-account-client"]);
      }
      else {
        alert("Введён неправильный код!");
      }
    })
  }

}
