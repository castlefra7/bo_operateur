import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOpRoutingModule } from './config-op-routing.module';
import { InsertConfComponent } from './components/insert-conf/insert-conf.component';
import { ConfigOpComponent } from './config-op.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ListConfigComponent } from './components/list-config/list-config.component';

@NgModule({
  declarations: [InsertConfComponent, ConfigOpComponent, ListConfigComponent],
  imports: [
    CommonModule,
    ConfigOpRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ConfigOpModule { }
