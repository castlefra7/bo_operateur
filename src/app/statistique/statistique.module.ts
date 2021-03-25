import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiqueRoutingModule } from './statistique-routing.module';
import { ListeStatComponent } from './liste-stat/liste-stat.component';
import { FormsModule } from '@angular/forms';
import { ChartsInfoComponent } from './charts-info/charts-info.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ListeStatComponent, ChartsInfoComponent],
  imports: [
    CommonModule,
    StatistiqueRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class StatistiqueModule { }
