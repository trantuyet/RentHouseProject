import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {Router} from '@angular/router';
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
  submitted = false;
  result!: Observable<any>;
  private authTokenRepo: any;
  private token: any;



  constructor(private userService: UserService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.userService.login(this.email, this.password).subscribe(
      data => {
        // console.log(data);
        this.showToasterSuccess();
        localStorage.setItem('auth_token', data.token);
        this.router.navigate(['/dashboarduser']);
      }, error => this.showToasterError());
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.login();
  }
  // tslint:disable-next-line:typedef
  showToasterSuccess() {
    this.notificationService.showSuccess(
      'Đăng nhập thành công !!',
      'Thông báo'
    );
  }

  // tslint:disable-next-line:typedef
  showToasterError() {
    this.notificationService.showError(
      'Đăng nhập thất bại Tài khoản hoặc mật khẩu không đúng !!',
      'thông báo'
    );
  }
  // tslint:disable-next-line:typedef
  logout() {
      localStorage.clear();
      this.router.navigate(['']);
    }

}
