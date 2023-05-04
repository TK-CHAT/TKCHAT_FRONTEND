import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpComponent } from './sing-up.component';
import { CheckInRoutingModule } from './sing-up-routing.module';



@NgModule({
  declarations: [
    SingUpComponent
  ],
  imports: [
    CommonModule,
    CheckInRoutingModule
  ]
})
export class SingUpModule { }
