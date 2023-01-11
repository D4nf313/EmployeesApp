import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Data, Employees } from '../employees/interface/employees.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url:string="/api/v1/";

  constructor(private http:HttpClient) { }

  getEmployees(){
  return this.http.get<Data>(`${this.url}/employees`)
  }

  buscarEmpleado(id:number){
    return this.http.get<Data>(`${this.url}/employee/${id}`)
  }
}
