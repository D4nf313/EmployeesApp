import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employees } from '../interface/employees.interface';

@Component({
  selector: 'app-employees-id',
  templateUrl: './employees-id.component.html',
  styleUrls: ['./employees-id.component.css']
})
export class EmployeesIdComponent implements OnInit {

  employeeForm!: FormGroup;
  resultado!:any;
  bandResultado:boolean=false;;
  

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {

    this.employeeForm = new FormGroup({
      id: new FormControl('', [Validators.pattern('[0-9]+'), Validators.required]),

   });
  
  }
  




  search(){
   
    let id=this.employeeForm.get('id')!.value
console.log(id)
    this.employeesService.buscarEmpleado(id).subscribe(resp=>{
      this.resultado=resp.data;
   this.bandResultado=true;
    }
      )

  }


}
