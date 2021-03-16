import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'offers',
    loadChildren: () => import("./offer/offer.module").then(md => md.OfferModule)
  },
  {
    path: 'conf',
    loadChildren: () => import('./global-conf/global-conf.module').then(md => md.GlobalConfModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./mobile-money/mobile-money.module').then(md => md.MobileMoneyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
