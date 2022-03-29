import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form!: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder
              ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmedPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  isConfirmedPassword() {
    return this.form.value.password === this.form.value.confirmedPassword;
  }

  onSubmit() {

  }

  toPage (link: string) {
    this.router.navigate([link]);
  }

}
