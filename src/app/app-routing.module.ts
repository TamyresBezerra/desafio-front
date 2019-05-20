
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from './guard/guard.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'admin',
    canActivate: [GuardGuard],
    loadChildren: './pages/admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
