//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
   templateUrl: 'sing-up.component.html',
   styleUrls: ['./sing-up.component.scss'],
})
export class SignupComponent implements OnInit {

   form!: FormGroup;
   loading = false;
   submitted = false;

   users: User | undefined;
   constructor(
      private userServ: UserService
   ) { 
      this.form = new FormGroup({});
   }

   ngOnInit() {
      //this.userServ.postUsers().subscribe((user) => (this.users = user));
      this.ddUser();
   }

   public async ddUser() {
      if (this.form.valid) {
         const userReg = this.form.value as User;
         try {
            const res = this.userServ.postUsers(userReg)
            .subscribe(
               (value)=>{console.log('Enviando formulario', value)}
               );
         } catch (e) { }
      }
   }
}
