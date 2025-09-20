// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'child-detail', pathMatch: 'full' },
  {
    path: 'parrainnage',
    loadComponent: () =>
      import('./parrainage/parrainage.page').then(m => m.ParrainagePage)
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
