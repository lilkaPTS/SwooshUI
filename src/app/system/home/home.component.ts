import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder
  ) {

  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      phone: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  onSubmit() {

  }

}
