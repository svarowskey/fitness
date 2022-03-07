import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CPageFitnessComponent} from './c-page-fitness.component';

const routes: Routes = [
  { path: '', component: CPageFitnessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CPageFitnessRoutingModule { }
