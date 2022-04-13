import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Services} from "./system/about-carwash/services";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form!: FormGroup;

  date1!: Date;

  services: Services[] = new Array();
  private baseUrl = 'http://localhost:8080';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
  }

  toPage (link: string) {
    this.router.navigate([link]);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      phone: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
    this.date1 = new Date();

    this.http.get<Services[]>(`${this.baseUrl}/api/customer/getListOfServices?carWashLocation=ул. Белинского 32a`).subscribe((data: Services[]) => {
      this.services = data;
    })
  }


  onSubmit() {

  }
}
