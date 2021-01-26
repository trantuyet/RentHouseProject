import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {LoginComponent} from "./user/login/login.component";
import {ListhouseComponent} from './house/listhouse/listhouse.component';
import {RegisterComponent} from './user/register/register.component';
import {UpdateprofileComponent} from './user/updateprofile/updateprofile.component';
import {AddhouseComponent} from "./house/addhouse/addhouse.component";
import {HouseComponent} from "./house/house.component";
import {DashboarduserComponent} from './user/dashboarduser/dashboarduser.component';

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
    path: 'dashboarduser',
    component: DashboarduserComponent
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
  , {
  path: 'house',
    component: HouseComponent, children: [
      { path: 'upload', component: AddhouseComponent},
      { path: 'list', component: ListhouseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
