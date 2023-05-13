import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { ResponseI } from '../models/response.interface';
import { LoginI } from '../models/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://apitkchat.onrender.com/'

  constructor(private http: HttpClient) {
    console.log('Servicio Usuario')
  }

  getUsers(){
    let header = new HttpHeaders().set("Authorization", "Bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzOTUwMTY2LCJpYXQiOjE2ODM4NjM3NjYsImp0aSI6IjI3NGQxZDVmZWVjYjRjMGI4ZGQxYWMwZjM0MWUyNjc0IiwidXNlcl9pZCI6Mn0.GGMsdxdKx2OiVXMI7NSlRVXkime8oN7fuG4QGww1uMU")
    .set('Type-content', 'aplication.json')
    return this.http.get(this.url + "/api/account/user/", {
    headers: header
    });
  }

  postUsers(user: User){
    return this.http.post("https://cors-anywhere.herokuapp.com/"+this.url + "/api/account/register/", user)
  }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "/api/account/login/";

    return this.http.post<ResponseI>(direccion,form);
  }
}
