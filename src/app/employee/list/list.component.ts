import { Employee } from './../../shared/models/employee';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(  private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.employees  = this.employeeService.getEmployees();
  }

}
