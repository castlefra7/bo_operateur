import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'offers',
    loadChildren: () => import("./offer/offer.module").then(md => md.OfferModule)
  },
  {
    path: 'conf',
    loadChildren: () => import('./config-op/config-op.module').then(md => md.ConfigOpModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./mobile-money/mobile-money.module').then(md => md.MobileMoneyModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(md => md.SignupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
