import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CPageFoodRoutingModule } from './c-page-food-routing.module';
import { CPageFoodComponent } from './c-page-food.component';


@NgModule({
  declarations: [
    CPageFoodComponent
  ],
  imports: [
    CommonModule,
    CPageFoodRoutingModule
  ]
})
export class CPageFoodModule { }
