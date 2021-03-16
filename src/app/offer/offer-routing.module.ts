import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertofferComponent } from './components/insertoffer/insertoffer.component';
import { OfferComponent } from './offer.component';

const routes: Routes = [
  {
    path: '',
    component: OfferComponent
  },
  {
    path: 'insert',
    component: InsertofferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
