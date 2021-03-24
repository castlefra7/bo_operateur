import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeStatComponent } from './liste-stat/liste-stat.component';

const routes: Routes = [{
  path : '',
  component : ListeStatComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiqueRoutingModule { }
