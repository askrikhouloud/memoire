import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'http://localhost:8000/api/login'; // URL de votre serveur PHP pour la connexion

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = {username: username, password: password};
    return this.http.post<any>(this.apiUrl, body);
  }
}

export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')){
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}






















