import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee';
import { environment } from '../../url.constants';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
  public employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService) {}

  async ngOnInit() {
    this.employee = await this.getEmployeeById();
  }

  async getEmployeeById(): Promise<Employee> {
    const id = +this.route.snapshot.paramMap.get('id');

    const employee = await this.employeesService.getEmployee(id);
    employee.skills.map(s => s.iconUrl = `${environment.apiUrl}/${s.iconUrl}`);

    return employee;
  }

}
