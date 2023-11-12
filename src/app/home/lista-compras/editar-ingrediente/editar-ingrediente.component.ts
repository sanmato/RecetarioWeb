import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ServicioComprasService } from '../servicio-compras.service';
import { Ingrediente } from 'src/app/core/ingrediente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-ingrediente',
  templateUrl: './editar-ingrediente.component.html',
  styleUrls: ['./editar-ingrediente.component.css']
})
export class EditarIngredienteComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditarIngredienteComponent>, private servicioCompras: ServicioComprasService, private formBuilder: FormBuilder, private router: Router){}

  public ingrediente: Ingrediente= new Ingrediente(undefined, undefined, undefined);
  
  ngOnInit() {
      this.ingrediente=this.data;
  }

  formulario: FormGroup= this.formBuilder.group({
    nombre:['', [Validators.required]],
    cantidad:[0, [Validators.required]],
    unidad:['',[Validators.required]],
  })

  editarIngrediente(){
    if(this.formulario.valid) {
    const ingrediente: Ingrediente={
      nombre:this.formulario.controls['nombre'].value,
      cantidad:this.formulario.controls['cantidad'].value,
      unidad:this.formulario.controls['unidad'].value
    }
    this.servicioCompras.editarIngrediente(ingrediente); 
    this.dialogRef.close(true);
  }
 }

  public closeDialog(){
  this.dialogRef.close(false);
  }

  mostrarIngrediente(){
  //   this.formulario=this.formBuilder.group({
  //   nombre:this.data.nombre,
  //   cantidad:this.data.cantidad,
  //   unidad:this.data.unidad
  //   }) 
  // }
}
}
