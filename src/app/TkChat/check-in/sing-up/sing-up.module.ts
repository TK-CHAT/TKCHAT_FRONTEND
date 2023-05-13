import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './sing-up.component';
import { CheckInRoutingModule } from './sing-up-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CheckInRoutingModule
  ]
})
/*
@NgModule({
  imports: [
    HttpClientModule,
    // Otros módulos importados
  ],
  // Otras configuraciones del módulo
})
*/

export class SingUpModule {
}
