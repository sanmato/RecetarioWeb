import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';
import { ServicioRecetasService } from '../servicio-recetas.service';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css'],
})
export class ListaRecetasComponent implements OnInit {
  
  recetas: Receta[] = [ ];


  constructor(private servicioReceta: ServicioRecetasService) {}

  ngOnInit(){
    this.recetas=this.servicioReceta.getRecetas();
  }

}
