import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalConfRoutingModule } from './global-conf-routing.module';
import { InsertConfComponent } from './components/insert-conf/insert-conf.component';



@NgModule({
  declarations: [InsertConfComponent],
  imports: [
    CommonModule,
    GlobalConfRoutingModule
  ]
})
export class GlobalConfModule { }
