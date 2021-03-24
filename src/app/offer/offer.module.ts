import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferRoutingModule } from './offer-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertofferComponent } from './components/insertoffer/insertoffer.component';
import { ListOffersComponent } from './components/list-offers/list-offers.component';
import { AmountListComponent } from './components/amount-list/amount-list.component';



@NgModule({
  declarations: [OfferComponent, InsertofferComponent, ListOffersComponent, AmountListComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormBuilder]
})
export class OfferModule { }
