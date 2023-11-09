import { EventEmitter, Injectable } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioRecetasService {

  recetas: Receta[] = [
    new Receta( 'Test de Receta',
    'Una prueba para ver',
    'https://www.clara.es/medio/2023/01/08/receta-calabaza-rellena-bolonesa_c46f79f3_1280x853.jpg'),
    new Receta( 'Otro test de Receta',
    'Otra prueba para ver',
    'https://www.clara.es/medio/2023/01/08/receta-calabaza-rellena-bolonesa_c46f79f3_1280x853.jpg')
  ];

  recetaSeleccionada: EventEmitter<Receta>= new EventEmitter();
  
  constructor() { }

  getRecetas(){
    return this.recetas.slice();
  }
}
