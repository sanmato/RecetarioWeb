import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/usuario.model';
import { servicioAuth } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authServicio: servicioAuth
  ) {}

  usuario: Usuario = new Usuario('', '', '', new Date(''));
  error: string = '';

  formularioUsuario: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    clave: ['', [Validators.required]],
  });

  logIn() {
    if (this.formularioUsuario.valid) {
      const email = this.formularioUsuario.get('email')?.value;
      const password = this.formularioUsuario.get('clave')?.value;

      this.authServicio.logueo(email, password).subscribe(
        (dataResponse) => {
          console.log(dataResponse);
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
