import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { LoginModule } from './login/login.module';
import { SingUpModule } from './sing-up/sing-up.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckInRoutingModule,
  ]
})
export class CheckInModule { }
