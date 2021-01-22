import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateprofileComponent} from "./user/updateprofile/updateprofile.component";

const routes: Routes = [
  {
    path: '',
    component: UpdateprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
