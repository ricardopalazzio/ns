import { ColumnComponent } from './../share/components/column/column.component';
import { TableComponent } from '../share/components/table/table.component';
import { EmployeeService } from './employee.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee.rounting';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    FormComponent,
    EmployeeComponent,
    TableComponent,
    ColumnComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
