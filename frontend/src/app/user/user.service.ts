import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }
  login(email: string, password: string): Observable<any> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      'email': email,
      'password': password
    };
    return this.http.post(`http://127.0.0.1:8000/api/login`, data, {headers: reqHeader, responseType: 'json'});
  }

  register(user: Object): Observable<Object> {
    return this.http.post(`http://127.0.0.1:8000/api/register`, user);
  }

  changePassword(id: string | null, oldPassword: string, newPassword: string, confirmPassword: string): Observable<Object> {
    const data = {
      'oldPassword': oldPassword,
      'newPassword': newPassword,
      'confirmPassword': confirmPassword
    }
    const auth_token = localStorage.getItem('AccessToken');
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.put(`http://127.0.0.1:8000/api/changePassword/${id}`, data, {headers: reqHeader});
  }


  // updateprofile(avatar: string, fullname:string, address:string, phone:number, email: string)

}
