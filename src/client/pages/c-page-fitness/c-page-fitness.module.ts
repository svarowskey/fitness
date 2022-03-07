import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CPageFitnessRoutingModule } from './c-page-fitness-routing.module';
import { CPageFitnessComponent } from './c-page-fitness.component';


@NgModule({
  declarations: [
    CPageFitnessComponent
  ],
  imports: [
    CommonModule,
    CPageFitnessRoutingModule
  ]
})
export class CPageFitnessModule { }
