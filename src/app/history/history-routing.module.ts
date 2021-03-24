import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallsHistoryComponent } from './calls-history/calls-history.component';

const routes: Routes = [{
  path: '',
  component: CallsHistoryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
