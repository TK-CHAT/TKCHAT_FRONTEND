import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { CheckInRoutingModule } from './login-routing.module';
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    CommonModule,
    CheckInRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
