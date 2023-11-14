import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/usuario.model';
import { servicioAuth } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authServicio: servicioAuth,
    private router: Router
  ) {}

  usuario: Usuario = new Usuario('', '', '', new Date(''));

  error: string = '';

  formularioUsuario: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    clave: ['', [Validators.required]],
  });

  registrarse() {
    if (this.formularioUsuario.valid) {
      const email = this.formularioUsuario.get('email')?.value;
      const password = this.formularioUsuario.get('clave')?.value;

      this.authServicio.alta(email, password).subscribe(
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
