import { Component, OnInit } from '@angular/core';
import { ServicioComprasService } from '../servicio-compras.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingrediente } from 'src/app/core/ingrediente.model';



@Component({
  selector: 'app-editar-compra',
  templateUrl: './editar-compra.component.html',
  styleUrls: ['./editar-compra.component.css']
})
export class EditarCompraComponent implements OnInit{

  constructor(private servicioCompras:ServicioComprasService, private formBuilder: FormBuilder, private router: Router){};
  
  ngOnInit() {
      
  }
  
  onAgregarIngrediente(){
    if(this.formulario.invalid!) return;
    const ingrediente: Ingrediente={
      nombre:this.formulario.controls['nombre'].value,
      cantidad:this.formulario.controls['cantidad'].value,
      unidad:this.formulario.controls['unidad'].value
    }
    this.servicioCompras.agregarIngrediente(ingrediente);
    this.router.navigate(['listaDeCompras']);
    }
  
     formulario: FormGroup= this.formBuilder.group({
      nombre:['',[Validators.required]],
      cantidad:['',[Validators.required]],
      unidad:['',[Validators.required]],
    })

   

}
