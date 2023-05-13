import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'login',
        loadChildren:()=>import('./login/login.module').then((m)=>m.LoginModule)
      },
      {
        path: 'singup',
        loadChildren:()=>import('./sing-up/sing-up.module').then((m)=>m.SingUpModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckInRoutingModule { }
