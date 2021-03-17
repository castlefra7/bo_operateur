import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOpRoutingModule } from './config-op-routing.module';
import { InsertConfComponent } from './components/insert-conf/insert-conf.component';
import { ConfigOpComponent } from './config-op.component';



@NgModule({
  declarations: [InsertConfComponent, ConfigOpComponent],
  imports: [
    CommonModule,
    ConfigOpRoutingModule
  ]
})
export class ConfigOpModule { }
