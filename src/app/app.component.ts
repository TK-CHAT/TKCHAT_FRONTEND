import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TkChat';

  constructor (private userService: UserService) {

  }

}
