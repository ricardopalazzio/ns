
import { CollapseModule } from 'ngx-bootstrap';

import { SiginComponent } from './sigin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiginRoutingModule } from './sigin-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SiginRoutingModule
  ],
  declarations: [
    SiginComponent
  ]
})
export class SiginModule { }
