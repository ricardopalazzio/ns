
import { EmployeeComponent } from './employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {path: '', component: EmployeeComponent,
  children: [
    {path: 'list', component: ListComponent},
    {path: 'new' , component: FormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
