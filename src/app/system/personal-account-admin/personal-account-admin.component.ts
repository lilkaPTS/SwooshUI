import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Carwashes} from "./carwashes";


@Component({
  selector: 'app-personal-account-admin',
  templateUrl: './personal-account-admin.component.html',
  styleUrls: ['./personal-account-admin.component.css']
})
export class PersonalAccountAdminComponent implements OnInit {

  count: number = 11;

  onClick(numb: number) {
    this.count = numb;
  }

  form!: FormGroup;
  private baseUrl = 'http://localhost:8080';

  nameCarWashes!: Carwashes[];

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type' : 'application/json'
        //'Authorization' : 'TOKEN ИЗ LOCALSTORAGE'
      }
    )
  }

  ngOnInit() {
    this.http.get<Carwashes>(`${this.baseUrl}/api/admin/getAllCarWashes`).subscribe((data: Carwashes) => {
        let nameCarWashes = data;
        }
      );
    }


}
