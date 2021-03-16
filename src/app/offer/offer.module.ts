import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferRoutingModule } from './offer-routing.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InsertofferComponent } from './components/insertoffer/insertoffer.component';
import { ListOffersComponent } from './components/list-offers/list-offers.component';



@NgModule({
  declarations: [OfferComponent, InsertofferComponent, ListOffersComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder]
})
export class OfferModule { }
