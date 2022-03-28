import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./system/home/home.component";
import {PersonalAccountClientComponent} from "./system/personal-account-client/personal-account-client.component";
import {PersonalAccountAdminComponent} from "./system/personal-account-admin/personal-account-admin.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'personal-account-client',
    component: PersonalAccountClientComponent
  },
  {
    path: 'personal-account-admin',
    component: PersonalAccountAdminComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
