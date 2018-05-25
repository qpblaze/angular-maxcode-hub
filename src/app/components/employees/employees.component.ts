import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employee';
import { environment } from '../../url.constants';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  public filteredEmployees: Employee[];
  public selectedEmployee: Employee;
  public employees: Employee[];
  public filterName: string;

  constructor(
    private route: ActivatedRoute,
    private employeesService: EmployeesService) { }

  async ngOnInit() {
    this.employees = await this.getEmployeesBySkill();
    this.filteredEmployees = this.employees;
  }

  async getEmployeesBySkill(): Promise<Employee[]> {
    let employees: Employee[] = await this.employeesService.getEmployees();

    const skillId = +this.route.snapshot.paramMap.get('skillId');
    if (skillId !== 0) {
      employees = employees.filter(x => x.skills.find(s => s.id === skillId));
    }

    return employees;
  }

  async filterEmployees(event: any) {
    this.filteredEmployees = this.employees.filter(x => x.firstName.toLowerCase().includes(event.name.toLowerCase()));
  }
}
