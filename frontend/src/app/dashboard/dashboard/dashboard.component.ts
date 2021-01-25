import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <nav class="navbar">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
            <img src="assets/images/logo.png"
        </a>
      </div>
    </nav>
  `,
  styles: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
