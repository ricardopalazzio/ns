import { FormComponent } from './form/form.component';
import { EmployeeComponent } from './employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: EmployeeComponent,
 // canActivateChild: [AlunosGuard],
  children : [
     {path: 'novo', component: FormComponent},
     {path: ':id', component: FormComponent,
         //resolve: { aluno : AlunoDetalheResolver }
     },
     //{path: ':id/editar', component: AlunoFormComponent,
     //    canDeactivate: [AlunosDeactivateGuard]
     //}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
