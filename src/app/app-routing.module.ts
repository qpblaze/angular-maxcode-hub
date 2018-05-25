import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:skillId', component: EmployeesComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'skills',  component: SkillsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})

export class AppRoutingModule { }
