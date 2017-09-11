import { BsDropdownModule } from 'ngx-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { NavbarMainComponent } from '../navbar-main/navbar-main.component';
import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    NavbarMainComponent
  ]
})
export class HomeModule { }
