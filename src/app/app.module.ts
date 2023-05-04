import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckInModule } from './TkChat/check-in/check-in.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckInModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
