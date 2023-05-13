import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { ChatsComponent } from './chats/chats.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({

  imports: [
    CommonModule,
    CheckInRoutingModule,
  ],

  declarations: [
      ChatsComponent,
      DashboardComponent

  ]
})
export class CheckInModule { }
