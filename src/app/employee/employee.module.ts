import { SharedModule } from '../shared/shared.module';
import { ColumnComponent } from './../shared/components/column/column.component';
import { TableComponent } from '../shared/components/table/table.component';
import { EmployeeService } from './employee.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee.rounting';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { EmployeeComponent } from './employee.component';
import { BsDropdownModule } from 'ngx-bootstrap/ng2-bootstrap';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    RouterModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    FormComponent,
    EmployeeComponent,
    TableComponent,
    ColumnComponent,
    ListComponent,

  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
