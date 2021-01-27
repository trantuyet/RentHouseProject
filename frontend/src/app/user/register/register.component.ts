import {Component, OnInit} from '@angular/core';

import {UserService} from "../user.service";
import {User} from "../User";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: string;
  email!: string;
  userPassword!: string;
  submitted: boolean = false;
  hide = true;
  hide2 = true;
  user: User = new User();
  newPasswordConfirm: any;


  constructor(private userService: UserService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }


  // newUser(): void {
  //   this.submitted = false;
  //   this.user = new User();
  // }


  register() {
    if (this.userPassword == this.newPasswordConfirm) {
      this.userService
        .register({
          'name': this.name,
          'email': this.email,
          'password': this.userPassword,
        })
        .subscribe(data => {
          this.toastr.success("Đăng kí thành công")
          this.router.navigate(['login']);

        }, error => this.toastr.error("Đăng kí thất bại"));
    } else {
      this.toastr.error("Xác nhận mật khẩu không đúng");
    }

  }

  onSubmit() {
    this.submitted = true;
    this.register();
  }

  // showToasterSuccess() {
  //   this.notificationService.showSuccess('Đăng ký thành công.', 'Thông báo !');
  // }

  // showToasterError() {
  //   this.notificationService.showError(
  //     'Đăng ký thất bại',
  //     'email của quý khách đã có người sử dụng'
  //   );
  // }

  // showToasterError1() {
  //   this.notificationService.showError(
  //     'Xác nhận mật khẩu không đúng.Vui lòng nhập lại',
  //     'Thông báo'
  //   )
  //
  // }

}
