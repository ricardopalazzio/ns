import { CollapseModule } from 'ngx-bootstrap';

import { SiginComponent } from './sigin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiginRoutingModule } from './sigin-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    SiginRoutingModule
  ],
  declarations: [
    SiginComponent
  ]
})
export class SiginModule { }
