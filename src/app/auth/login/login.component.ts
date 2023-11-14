import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/usuario.modelo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder){}

  usuario: Usuario= new Usuario('', '');

  formulario: FormGroup= this.formBuilder.group({
    email:['', [Validators.required]],
    clave:[0, [Validators.required]],
  })

  logIn(){
    if(this.formulario.valid) {
    const usuario: Usuario={
      email:this.formulario.controls['email'].value,
      clave:this.formulario.controls['clave'].value,
    }
  }
 }
}
