import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
 // constructor(public jwtHelper:JwtHelperService){}
  
  login(user: string, password: string): boolean {
    if (user === 'nikos' && password === '0234') {
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    //Token
const token = localStorage.getItem('token');
const jwtHelper:JwtHelperService = new JwtHelperService();
if (jwtHelper.isTokenExpired(token)){
  //token is epired
}

    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
