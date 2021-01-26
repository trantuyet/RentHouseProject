import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  name!: string;
  email!: string;
  address!: string;
  phone!: number;
  constructor() {
  }

  ngOnInit(): void {
  }

}
