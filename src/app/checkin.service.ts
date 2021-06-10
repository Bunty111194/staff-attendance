import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  API = 'http://localhost:8080';
  constructor( private http:HttpClient) { }

  public  checkin(data: any){
    return this.http.post(this.API +'/login',data);
  }
  
}
