import { Component } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {

  recetaSeleccionada: Receta= new Receta('', '', '');

}
