import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  toPage (link: string) {
    this.router.navigate([link]);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      phone: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  onSubmit() {

  }
}
