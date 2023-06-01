import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './sing-up.component';
import { CheckInRoutingModule } from './sing-up-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CheckInRoutingModule,
    ReactiveFormsModule
  ]
})

export class SingUpModule {
}
