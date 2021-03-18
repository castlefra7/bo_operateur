import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMoneyComponent } from './mobile-money.component';
import { MobileMoneyRoutingModule } from './mobile-money-routing.module';
import { DepositsListComponent } from './components/deposits-list/deposits-list.component';
import { MobileMoneyService } from './services/mobile-money.service';



@NgModule({
  declarations: [MobileMoneyComponent, DepositsListComponent],
  imports: [
    CommonModule,
    MobileMoneyRoutingModule
  ],
  providers: [MobileMoneyService]
})
export class MobileMoneyModule { }
