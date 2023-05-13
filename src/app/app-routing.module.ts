import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './TkChat/check-in/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'checkIn',
        loadChildren:() => import('./TkChat/check-in/check-in.module').then((m)=>m.CheckInModule)
      },

      {
        path: 'dashboard',
        loadChildren:() => import('./TkChat/check-in/dashboard/dashboard.component').then((m)=>m.DashboardComponent)
      },

    ],
  },



  {path: 'dashboard', component:DashboardComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
