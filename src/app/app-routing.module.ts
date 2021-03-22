import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from './auth/admin-auth.guard';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./accueil/accueil.module").then(md => md.AccueilModule)
  },
  {
    path: 'offers',
    canActivate : [AdminAuthGuard],
    loadChildren: () => import("./offer/offer.module").then(md => md.OfferModule)
  },
  {
    path: 'conf',
    canActivate : [AdminAuthGuard],
    loadChildren: () => import('./config-op/config-op.module').then(md => md.ConfigOpModule)
  },
  {
    path: 'mobile',
    canActivate : [AdminAuthGuard],
    loadChildren: () => import('./mobile-money/mobile-money.module').then(md => md.MobileMoneyModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(md => md.SignupModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then(md => md.SigninModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
