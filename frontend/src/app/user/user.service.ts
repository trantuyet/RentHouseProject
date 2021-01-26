import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private EMAIL_SESSION_ATTRIBUTE_NAME: string;
  private email: null;
  private password: null;

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

  // updateprofile(avatar: string, fullname:string, address:string, phone:number, email: string)

  logout() {
    sessionStorage.removeItem(this.EMAIL_SESSION_ATTRIBUTE_NAME);
    this.email = null;
    this.password = null;
  }
}
