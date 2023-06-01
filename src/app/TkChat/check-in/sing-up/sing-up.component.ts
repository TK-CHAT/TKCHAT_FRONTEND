import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regUserConstants } from 'src/app/common/constants/regUserConstant';
import { nav } from 'src/app/common/constants/sub-routing.constants';
import { CodeType } from 'src/app/common/enums/code-type.enum';
import { RouterNavigate } from 'src/app/common/enums/router-navigate.enum';
import { regUser } from 'src/app/common/interfaces/reg_user.interface';
import { CredentailsUser } from 'src/app/common/interfaces/user-credentials.interface';
import { Alert } from 'src/app/models/alert.class';
import { UserService } from 'src/app/services/user.service';


@Component({
   selector: 'app-sing-up',
   templateUrl: './sing-up.component.html',
   styleUrls: ['./sing-up.component.scss']
})
export class SignupComponent implements OnInit {

   public signupForm !: FormGroup;
   private alert = inject(Alert);

   /**
   * TODO: generar las alertas de error dependiendo el error al registrar el usuario
   * @param router
   * @param regUsersService
   * @param cookieService
   */

   constructor(
      private router: Router,
      private regUserService: UserService,
      private fb: FormBuilder
   ) { }

   ngOnInit(): void {
      this.crearFormulario();
   }

   /*
   public createForm() {
      this.loading('Cargando ...');
      this.signupForm = new FormGroup({
         first_name: new FormControl(''),
         last_name: new FormControl(''),
         date_of_birth: new FormControl(''),
         email: new FormControl(''),
         password: new FormControl(''),
         password2: new FormControl(''),
      });
      this.alert.close();
      console.log(this.signupForm.valid);
   }
   */

   get nombreNoValido() {
      return this.signupForm.get('first_name')?.invalid && this.signupForm.get('first_name')?.touched;
   }
   get apellidoNoValido() {
      return this.signupForm.get('last_name')?.invalid && this.signupForm.get('last_name')?.touched;
   }
   get fechaNoValido() {
      return this.signupForm.get('date_of_birth')?.invalid && this.signupForm.get('date_of_birth')?.touched;
   }
   get correoNoValido() {
      return this.signupForm.get('email')?.invalid && this.signupForm.get('email')?.touched;
   }
   get password1NoValido() {
      return this.signupForm.get('password')?.invalid && this.signupForm.get('password')?.touched;
   }
   get password2NoValido() {
      return this.signupForm.get('password2')?.invalid && this.signupForm.get('password2')?.touched;
   }

   public crearFormulario() {
      this.loading('Cargando ...');
      this.signupForm = this.fb.group({
         first_name: ['', [Validators.required, Validators.minLength(2)]],
         last_name: ['', Validators.required],
         date_of_birth: ['', Validators.required],
         email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
         password: ['', [Validators.required, Validators.minLength(6)]],
         password2: ['', [Validators.required, Validators.minLength(6)]],
      }, {
         Validators: this.passwordIguales('password', 'password2')
      });
      this.alert.close();
      console.log(this.signupForm.valid);
   }

   guardarForm() {
      console.log(this.signupForm);

      this.passNoValido();

      if (this.signupForm.invalid) {
         return Object.values(this.signupForm.controls).forEach(control => {
            control.markAllAsTouched();
         })
      }
   }

   public async registrar() {

      console.log(this.signupForm);

      this.passNoValido();
      let band: Boolean = this.passNoValido();
      if (this.signupForm.valid && band != true) {
         const userRegister = this.signupForm.value as regUser;
         try {
            const res = await this.regUserService.addUser(userRegister);
            console.log("registrar ~ res", res);
         } catch (e) {
         }
         this.router.navigate(['/login']);
      } else {
         this.router.navigate(['/singup']);
      }
   }

   limpiar() {
      this.signupForm.reset();
   }

   //Para Validaciones
   passwordIguales(pass1Name: string, pass2Name: string) {
      return (formGroup: FormGroup) => {
         const pass1Control = formGroup.get(pass1Name);
         const pass2Control = formGroup.get(pass2Name);

         if (pass1Control?.value === pass2Control?.value) {
            pass2Control?.setErrors(null);
         } else {
            pass2Control?.setErrors({ noEsIgual: true })
         }

      }
   }

   passNoValido() {
      const pass1 = this.signupForm.get('password')?.value;
      const pass2 = this.signupForm.get('password2')?.value;

      if (pass1 != pass2) {
         return true;
      } else {
         return false;
      }
   }


   //Para Alertas
   public loading(text: string): void {
      this.alert.loading(text);
   }

   public question(response: any): void {
      this.alert
         .question(
            response.action === regUserConstants.ACTION_ADD
               ? regUserConstants.TITLE_MODAL_QUESTION_SAVE
               : regUserConstants.TITLE_MODAL_QUESTION_UPDATE,
            '¡No podrás revertir esto!',
            true,
            true,
            'Aceptar',
            'Cancelar'
         )
         .then((data: boolean) => {
            if (data) {
               if (response.action === regUserConstants.ACTION_ADD) {
                  this.registrar();
               }
            }
         });
   }


}
