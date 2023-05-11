import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl = 'http://localhost/projet/api/user/';

  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get<any>(this.userUrl + 'get_all.php');
  }

  getbyId(idUser: any) {
    let params = new HttpParams();
    params = params.append('idUser', idUser);
    return this.http.get<any>(this.userUrl + 'get_one.php', { params: params });
  }

  updateUser( user: any) {
    return this.http.put<any>(this.userUrl + 'update_user.php' , user);
  }

  deleteUser(model: any) {
    return this.http.post<any>(this.userUrl + 'delete.php', model);
  }
}
