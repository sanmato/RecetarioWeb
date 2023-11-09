import { Component } from '@angular/core';
import { ServicioComprasService } from '../servicio-compras.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from 'src/app/core/ingrediente.model';


@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css']
})
export class EditarCompraComponent {

  constructor(private servicioCompras:ServicioComprasService, private formBuilder: FormBuilder, private router: Router){};

  onAgregarIngrediente(){
    if(this.formulario.invalid!) return;
    const ingrediente: Ingrediente={
      nombre:this.formulario.controls['nombre'].value,
      monto:this.formulario.controls['monto'].value,
    }
    this.servicioCompras.agregarIngrediente(ingrediente);
    this.router.navigateByUrl("/listaCompras");
    }
  
     formulario: FormGroup= this.formBuilder.group({
      nombre:['',[Validators.required]],
      monto:['',[Validators.required]],
    })

}
