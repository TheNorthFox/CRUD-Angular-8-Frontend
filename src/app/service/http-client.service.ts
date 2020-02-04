import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getEmployees()
  {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
  }


  public deleteEmployee(employee) {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.id,{headers});
  }

  public createEmployee(employee) {
    let username='user'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee,{headers});
  }
}
