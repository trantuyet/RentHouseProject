import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {LoginComponent} from "./user/login/login.component";
import {ListhouseComponent} from './house/listhouse/listhouse.component';
import {RegisterComponent} from './user/register/register.component'
import {AddhouseComponent} from "./house/addhouse/addhouse.component";
import {LogoutComponent} from "./user/logout/logout.component";
const routes: Routes = [

  {
    path: 'dashboard/login',
    component:LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listhouse',
    component: ListhouseComponent
  },
  {
    path: 'addhouse',
    component: AddhouseComponent
  },
  { path: 'dashboard/logout',
    component: LogoutComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
