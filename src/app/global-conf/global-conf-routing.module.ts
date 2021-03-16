import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertConfComponent } from './components/insert-conf/insert-conf.component';
import { GlobalConfComponent } from './global-conf.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalConfComponent
  },
  {
    path: 'insert',
    component: InsertConfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalConfRoutingModule { }
