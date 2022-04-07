import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
