import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../Service/user.service';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';

import { Router } from '@angular/router';

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



    // const usuario={ email:"giancarlo@hotmail.com", password:"12347890"} as LoginI;
    // this.user.loginByEmail(usuario).subscribe(data =>{
    //   console.log(data);
    // })
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
