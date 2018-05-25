import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../url.constants';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  private cahedEmployees: Employee[];

  constructor(private http: HttpClient) { }

  private fixEmployeeProfilePicture(employee: Employee) {
    if (employee.mediumThumbUrl.includes('generic')) {
      employee.mediumThumbUrl = `https://api.adorable.io/avatars/285/${employee.firstName}_${employee.lastName}`;
    } else {
      employee.mediumThumbUrl = `${environment.apiUrl}/${employee.mediumThumbUrl}`;
    }
  }

  async getEmployees(): Promise<Employee[]> {
    if (this.cahedEmployees) {
      return this.cahedEmployees;
    }

    const employees: Employee[] = await this.http.get<Employee[]>(environment.apiUrl + '/api/employees').toPromise();
    employees.forEach(e => this.fixEmployeeProfilePicture(e));

    this.cahedEmployees = employees;
    return employees;
  }

  async getEmployee(id: number): Promise<Employee> {
    const employee: Employee = await this.http.get<Employee>(environment.apiUrl + '/api/employees/' + id).toPromise();
    this.fixEmployeeProfilePicture(employee);

    return employee;
  }
}
