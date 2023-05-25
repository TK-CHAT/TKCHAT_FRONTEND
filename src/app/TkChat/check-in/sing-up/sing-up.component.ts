import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
   templateUrl: './sing-up.component.html',
   styleUrls: ['./sing-up.component.scss']
})
export class SignupComponent implements OnInit {

   user: User = {
      id: '',
      nombres: '',
      apellidos: '',
      correo: '',
      password: '',
      samepass: ''
   };

   constructor(private userServ: UserService, private router: Router) {
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
