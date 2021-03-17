import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertConfComponent } from './components/insert-conf/insert-conf.component';
import { ConfigOpComponent } from './config-op.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigOpComponent
  },
  {
    path:'insert',
    component: InsertConfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigOpRoutingModule { }
