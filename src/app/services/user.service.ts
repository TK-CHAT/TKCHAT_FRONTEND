import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/interfaces/user.interface';
import { regUser } from '../common/interfaces/reg_user.interface';
import { IResponse } from '../common/interfaces/response.interface';

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
    return this.http.get(this.url + "api/account/user/");
  }

  //agregar users:
  addUsersss(user: User) {
    return this.http.post(this.url + "api/account/register/", user);
  }
  //2da opcion(add):
  public async addUser(user: regUser): Promise<IResponse> {
    return new Promise<IResponse>((resolve) => {
      this.http.post<any>(this.url + "api/account/register/", user)
        .pipe()
        .subscribe((res) => {
          resolve(res);
        })
    })
  }

}
