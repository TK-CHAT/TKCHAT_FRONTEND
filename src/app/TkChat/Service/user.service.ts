import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginI } from '../check-in/modelos/login.interface';
import { ResponseI } from '../check-in/modelos/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = "https://apitkchat.onrender.com"


  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "/api/account/login/";

    return this.http.post<ResponseI>(direccion,form);
  }
}
