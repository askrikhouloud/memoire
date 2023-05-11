import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursService {
  cours = '';
  constructor(private http: HttpClient) {}

  getAllCours() {
    return this.http.get(this.cours);
  }
}
