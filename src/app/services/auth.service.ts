import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'http://localhost/projet/api/user/';

  constructor(private http: HttpClient) {}

  loginUser(model: any) {
    return this.http.post<any>(this.authUrl + 'login.php', model);
  }

  //decode token and get data
  saveDataProfil() {
    const helper = new JwtHelperService();
    let myRawToken: any = localStorage.getItem('myToken');
    const decodedToken = helper.decodeToken(myRawToken);
    return decodedToken;
  }

  //test user logged or no
  isLoggedIn() {
    let token = localStorage.getItem('myToken');
    if (token) return true;
    else return false;
  }
}
