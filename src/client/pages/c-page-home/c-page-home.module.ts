import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CPageHomeRoutingModule } from './c-page-home-routing.module';
import { CPageHomeComponent } from './c-page-home.component';


@NgModule({
  declarations: [
    CPageHomeComponent
  ],
  imports: [
    CommonModule,
    CPageHomeRoutingModule
  ]
})
export class CPageHomeModule { }
