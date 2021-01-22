import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  hide = true;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.email, this.password).subscribe(
      data => {
        // console.log(data);
        localStorage.setItem('auth_token', data.token);
      }
    )
  }
}
