import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/usuario.model';
import { servicioAuth } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authServicio: servicioAuth,
    private router: Router
  ) {}

  usuario: Usuario = new Usuario('', '', '', new Date(''));
  error: string = '';

  formularioUsuario: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required, Validators.minLength(6)]],
  });

  validar(field: string, error: string){
    return this.formularioUsuario.controls[field].getError(error)
    &&
    this.formularioUsuario.controls[field].touched
  }

  logIn() {
    if (this.formularioUsuario.valid) {
      const email = this.formularioUsuario.get('email')?.value;
      const password = this.formularioUsuario.get('clave')?.value;

      this.authServicio.logueo(email, password).subscribe(
        (dataResponse) => {
          console.log(dataResponse);
          this.router.navigate(['/recetas']);
        },
        (mensajeError) => {
          console.log(mensajeError);
          this.error = mensajeError;
        }
      );

      this.formularioUsuario.reset();
    }
  }
}
