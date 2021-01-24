import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import { NotificationService } from 'src/app/notification.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  hide = true;
  submitted: boolean = false;
  result!: Observable<any>;


  constructor(private userService: UserService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.email, this.password).subscribe(
      data => {
        // console.log(data);
        this.showToasterSuccess()
        localStorage.setItem('auth_token', data.token);
        this.router.navigate(['/dashboard']);
      }, error => this.showToasterError())
  }

  onSubmit() {
    this.submitted = true;
    this.login();
  }
  showToasterSuccess() {
    this.notificationService.showSuccess(
      'Đăng nhập thành công !!',
      'Thông báo'
    );
  }

  showToasterError() {
    this.notificationService.showError(
      'Đăng nhập thất bại Tài khoản hoặc mật khẩu không đúng !!',
      'thông báo'
    )
  }

}
