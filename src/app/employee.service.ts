import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }


  public registeremployee(employeeData: any) {
    return this.http.post(this.API + '/addemployee', employeeData,{responseType:'text'});
  }
  public getemployee() {
    return this.http.get(this.API + '/getemployees');
  }
  public deleteemployee(employeeId: any) {
    console.log(typeof employeeId);
    return this.http.delete(this.API + '/deleteemployee', employeeId);
  }

  public updateemployee(employee :any){
    return this.http.put(this.API + '/updateemployee',employee,{responseType:'text'});
  }
}
