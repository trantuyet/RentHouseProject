import { Component, OnInit } from '@angular/core';
import {  }

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

}
