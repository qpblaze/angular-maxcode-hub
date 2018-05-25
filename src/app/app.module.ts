import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeesComponent } from './components/employees/employees.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { SearchSkillComponent } from './components/search-skill/search-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    SkillsComponent,
    EmployeeDetailsComponent,
    SearchEmployeeComponent,
    SearchSkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
