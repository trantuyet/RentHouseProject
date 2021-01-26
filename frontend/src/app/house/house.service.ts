import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor() { }

  getAllHouse(): Observable<any> {
    // @ts-ignore
    return this.http.get<any>(environment.url + '/houses', {headers: this.getHeaders()});
  }

  multiSearch(data: any): Observable<any> {
    // @ts-ignore
    return this.http.post(environment.url + '/houses/multiSearch', data, {headers: this.getHeaders()});
  }

}
