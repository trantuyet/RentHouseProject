import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  private router: any;

  constructor(private _authService: UserService) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/dashboard']);
  }
}
