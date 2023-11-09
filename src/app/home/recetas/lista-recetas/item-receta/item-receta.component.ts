import { Component, EventEmitter, Input } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';
import { ServicioRecetasService } from '../../servicio-recetas.service';

@Component({
  selector: 'app-item-receta',
  templateUrl: './item-receta.component.html',
  styleUrls: ['./item-receta.component.css']
})
export class ItemRecetaComponent {

  @Input() receta: Receta= new Receta('', '', '');

  constructor(private servicioReceta: ServicioRecetasService){};

  seleccionar(){
    this.servicioReceta.recetaSeleccionada.emit(this.receta);
  }

  

}
