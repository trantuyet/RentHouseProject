import { Component, OnInit } from '@angular/core';
import { UserService} from "../user.service";
import { IUser} from "../IUser";

@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})
export class DashboarduserComponent implements OnInit {

  user: IUser[];
  constructor() { }

  ngOnInit(): void {
  }
}
