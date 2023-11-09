import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';
import { ServicioRecetasService } from './servicio-recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetaSeleccionada: Receta= new Receta('', '', '');

  constructor(private servicioReceta: ServicioRecetasService) {}
  
  ngOnInit(){
    this.servicioReceta.recetaSeleccionada
    .subscribe(
      (receta: Receta) =>
      { 
        this.recetaSeleccionada= receta
      }
      )
      
  }
}

