import { Employee } from './../share/model/employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  private employees: Employee[] = [
    {id: 1, nome: 'Funcionario 01', email: '01@email.com', pis: '0000000'},
    {id: 2, nome: 'Funcionario', email: '02@email.com', pis: '0000000'},
    {id: 3, nome: 'Funcionario 03', email: '03@email.com', pis: '0000000'}
  ];

  getEmployees() {
    return this.employees;
  }

  getEmployee(id: number) {

    for (let i = 0; i < this.employees.length; i++) {

      const employee: Employee = this.employees[i];

      if (employee.id === id) {
        return employee;
      }
    }
    return null;
  }

}
