import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiqueRoutingModule } from './statistique-routing.module';
import { ListeStatComponent } from './liste-stat/liste-stat.component';


@NgModule({
  declarations: [ListeStatComponent],
  imports: [
    CommonModule,
    StatistiqueRoutingModule
  ]
})
export class StatistiqueModule { }
