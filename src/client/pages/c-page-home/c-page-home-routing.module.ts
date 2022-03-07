import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CPageHomeComponent} from './c-page-home.component';

const routes: Routes = [
  { path: '', component: CPageHomeComponent },
  { path: 'fitness', loadChildren: () => import('../c-page-fitness/c-page-fitness.module').then(m => m.CPageFitnessModule) },
  { path: 'food', loadChildren: () => import('../c-page-food/c-page-food.module').then(m => m.CPageFoodModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CPageHomeRoutingModule { }
