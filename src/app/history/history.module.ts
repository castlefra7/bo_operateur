import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { CallsHistoryComponent } from './calls-history/calls-history.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CallsHistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ]
})
export class HistoryModule { }
