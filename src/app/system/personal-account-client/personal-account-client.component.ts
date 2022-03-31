import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-personal-account-client',
  templateUrl: './personal-account-client.component.html',
  styleUrls: ['./personal-account-client.component.css']
})
export class PersonalAccountClientComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
