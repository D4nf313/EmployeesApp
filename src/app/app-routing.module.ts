import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { EmployeesIdComponent } from './employees/employees-id/employees-id.component';
import { EmployeesComponent } from './employees/employees/employees.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeesComponent

  },
  {
    path:'id',
    component:EmployeesIdComponent
  
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
