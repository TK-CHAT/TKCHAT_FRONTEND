import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
   selector: 'app/TkChat/check-in/sing-up',
   templateUrl: './sing-up.component.html',
   styleUrls: ['./sing-up.component.scss']
})
export class SignupComponent implements OnInit {

   singupForm: FormGroup;

   user: User = {
      id: '',
      nombres: '',
      apellidos: '',
      correo: '',
      password: '',
      samepass: ''
   };

   constructor(private userServ: UserService, private router: Router) {
      this.singupForm = new FormGroup({
         nombres : new FormControl('', Validators.required),
         apellidos : new FormControl('', Validators.required),
         correo : new FormControl('', Validators.required),
         password : new FormControl('', Validators.required),
         samepass : new FormControl('', Validators.required)
      })
   }

   ngOnInit(): void {
   }

   registrar() {
      this.userServ.addUser(this.user).subscribe(
         (value) => { console.log('Enviando formulario', value) }
      );
      this.router.navigate(['/login']);
   }

   /*
   public async ddUser() {
      if (this.form.valid) {
         const userReg = this.form.value as User;
         try {
         } catch (e) { }
      }
   }
   */

}
