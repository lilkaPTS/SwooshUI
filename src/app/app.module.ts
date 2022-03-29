import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./system/home/home.component";
import {NotFoundComponent} from "./system/not-found/not-found.component";
import {PersonalAccountClientComponent} from "./system/personal-account-client/personal-account-client.component";
import {PersonalAccountAdminComponent} from "./system/personal-account-admin/personal-account-admin.component";
import {HeaderComponent} from "./system/shared/header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PersonalAccountClientComponent,
    PersonalAccountAdminComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
