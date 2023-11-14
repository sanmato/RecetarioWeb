import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/usuario.modelo';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private formBuilder: FormBuilder){}

  usuario: Usuario= new Usuario('', '');

  formularioUsuario: FormGroup= this.formBuilder.group({
    email:['', [Validators.required]],
    clave:['', [Validators.required]],
  })

  registrarse(){
    if(this.formularioUsuario.valid) {
    const usuario: Usuario={
      email:this.formularioUsuario.controls['email'].value,
      clave:this.formularioUsuario.controls['clave'].value,
    }
  }
 }
}

