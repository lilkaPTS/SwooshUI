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

  nameCarWashes: string[] = new Array();
  nameEmployees: string[] = new Array();

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }


  ngOnInit() {
    this.http.get<string[]>(`${this.baseUrl}/api/admin/getAllCarWashes`).subscribe((data: string[]) => {
        this.nameCarWashes = data;
        }
      );


    this.http.get<string[]>(`${this.baseUrl}/api/admin/getAllEmployees?location=ул. Белинского 32a`).subscribe((data:string[]) => {
      this.nameEmployees = data;
    });
    }


}
