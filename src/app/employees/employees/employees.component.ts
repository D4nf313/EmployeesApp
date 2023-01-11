import { Component, OnInit } from '@angular/core';
import { format } from 'path';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from '../interface/employees.interface';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  empleados: Employees[] = [];


  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe(resp =>{
  
   console.log(JSON.stringify(resp.data[0]))
   this.empleados=resp.data
    } );
  }

  transformData(resp:Employees){

  }
}
