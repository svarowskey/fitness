import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CPageFoodComponent} from './c-page-food.component';

const routes: Routes = [
  { path: '', component: CPageFoodComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CPageFoodRoutingModule { }
