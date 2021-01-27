import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
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


  constructor(private userService: UserService,
              private router: Router,
              private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.userService.login(this.email, this.password).subscribe(
      data => {
        // console.log(data);
        this.toastr.success("Đăng nhập thành công");
        localStorage.setItem('auth_token', data.token);
        this.router.navigate(['/dashboarduser']);
      }, error => this.toastr.error("Đăng nhập thất bại"));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.login();
  }
  // tslint:disable-next-line:typedef
  // showToasterSuccess() {
  //   this.notificationService.showSuccess(
  //     'Đăng nhập thành công !!',
  //     'Thông báo'
  //   );
  // }
  //
  // // tslint:disable-next-line:typedef
  // showToasterError() {
  //   this.notificationService.showError(
  //     'Đăng nhập thất bại Tài khoản hoặc mật khẩu không đúng !!',
  //     'thông báo'
  //   );
  // }

}
