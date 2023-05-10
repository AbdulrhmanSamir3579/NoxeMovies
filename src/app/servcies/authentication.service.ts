import { LoginObject } from './../interfaces/loginobject';
import { RegisterObject } from './../interfaces/registerobject';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _HttpClient: HttpClient,
    private _Router:Router) {
    if(localStorage.getItem('token') !== null){
      this.decodeUserData();
    }
  }

  register(userObj: RegisterObject): Observable<any> {
    return this._HttpClient.post(
      'https://route-ecommerce.onrender.com/api/v1/auth/signup',
      userObj
    );
  }

  login(userObj: LoginObject): Observable<any> {
    return this._HttpClient.post(
      'https://route-ecommerce.onrender.com/api/v1/auth/signin',
      userObj
    );
  }

  logout(){
    localStorage.removeItem('token');
    this._Router.navigate(['/login'])
  }

  userData = new BehaviorSubject(null);
  decodeUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('token'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  }
}
