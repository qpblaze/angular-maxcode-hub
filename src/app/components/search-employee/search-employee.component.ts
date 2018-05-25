import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {
  @Output() update = new EventEmitter<any>();

  public name: string;

  constructor() { }

  ngOnInit() {
  }

  filterEmployees() {
    this.update.emit({
      name: this.name
    });
  }
}
