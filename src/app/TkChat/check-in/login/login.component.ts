import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginI } from '../../../models/login.interface';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ResponseI } from 'src/app/models/response.interface';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup;


  constructor(private user:UserService, private router:Router){
    this.loginForm = new FormGroup({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {

  }

  onLogin(){
    console.log(this.loginForm);

    const tempo=this.loginForm.value as LoginI;


    this.user.loginByEmail(tempo).subscribe(data =>{
      let dataResponse:ResponseI = data;

      localStorage.setItem("Token", JSON.stringify(dataResponse))
      console.log(dataResponse)

    })
  }

}
