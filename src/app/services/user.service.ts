import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://apitkchat.onrender.com/'

  constructor(private http: HttpClient) {
    console.log('Servicio Usuario')
  }

  //get users
  getUsers() {
    return this.http.get(this.url + "/api/account/user/");
  }

  //agregar users
  addUser(user: User) {
    return this.http.post("https://cors-anywhere.herokuapp.com/" + this.url + "/api/account/register/", user);
  }
}
