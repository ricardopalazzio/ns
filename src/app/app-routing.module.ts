import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: 'sigin', loadChildren: 'app/sigin/sigin.module#SiginModule'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  { path: '', loadChildren: 'app/sigin/sigin.module#SiginModule'},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
