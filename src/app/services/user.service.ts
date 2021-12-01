import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journalists } from '../interfaces/journalistModels';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get<Journalists>(this.url+'profile')
  }


}
