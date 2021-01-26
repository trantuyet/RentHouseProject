import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {LoginComponent} from "./user/login/login.component";
import {ListhouseComponent} from './house/listhouse/listhouse.component';
import {RegisterComponent} from './user/register/register.component';
import {ChangepasswordComponent} from "./user/changepassword/changepassword.component";
const routes: Routes = [

  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'dashboard/register',
    component: RegisterComponent
  },
  {
    path: 'dashboard/changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'listhouse',
    component: ListhouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
