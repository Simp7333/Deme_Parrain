// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'child-detail',
    loadComponent: () =>
      import('./child-detail/child-detail.page').then(m => m.ChildDetailPage)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'parrainage',
    loadChildren: () => import('./parrainage/parrainage.module').then( m => m.ParrainagePageModule)
  },
  {
    path: 'paiement',
    loadComponent: () => import('./payment/payment.page').then(m => m.PaymentPage)
  },
  {
    path: 'rapport',
    loadComponent: () => import('./rapport/rapport.page').then(m => m.RapportPage)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
