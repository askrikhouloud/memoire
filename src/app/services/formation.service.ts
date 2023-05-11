import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class FormationService {

  formationUrl = 'http://localhost/projet/api/formation/';

  constructor(private http: HttpClient) {}

  
  getAllFormation() {
    return this.http.get(this.formationUrl +'get_all.php');
  }

  getbyId(idFormation: any) {
    let params = new HttpParams();
    params = params.append('idFormation', idFormation);
    return this.http.get<any>(this.formationUrl + 'get_one.php');
    }
    updateformation( formation: any){
      return this.http.put<any>(this.formationUrl + 'update_formation.php', formation);

    }
  

    deleteFormation(model: any) {
      return this.http.post<any>(this.formationUrl + 'delete.php', model);
    }
}


  