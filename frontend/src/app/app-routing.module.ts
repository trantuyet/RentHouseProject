import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {LoginComponent} from "./user/login/login.component";
import {ListhouseComponent} from './house/listhouse/listhouse.component';
import {RegisterComponent} from './user/register/register.component';
import {UpdateprofileComponent} from './user/updateprofile/updateprofile.component';
import {AddhouseComponent} from "./house/addhouse/addhouse.component";

const routes: Routes = [

  {
    path: 'dashboard/login',
    component: LoginComponent
  },
  {
    path: 'dashboard/register',
    component: RegisterComponent
  },
  {
    path: 'updateprofile',
    component: UpdateprofileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'listhouse',
    component: ListhouseComponent
  },
  {
    path: '',
    component: ListhouseComponent
  },
  {
    path: 'addhouse',
    component: AddhouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
