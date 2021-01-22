import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateprofileComponent} from "./user/updateprofile/updateprofile.component";
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {LoginComponent} from "./user/login/login.component";


const routes: Routes = [
  // {
  //   path: '',
  //   component: UpdateprofileComponent
  // },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
