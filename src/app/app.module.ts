import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './system/header/header.component';
import { HomeComponent } from './system/home/home.component';
import { NotFoundComponent } from './system/not-found/not-found.component';
import { PersonalAccountAdminComponent } from './system/personal-account-admin/personal-account-admin.component';
import { PersonalAccountClientComponent } from './system/personal-account-client/personal-account-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    PersonalAccountAdminComponent,
    PersonalAccountClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
