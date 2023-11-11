import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediente } from 'src/app/core/ingrediente.model';
import { Receta } from 'src/app/core/receta.model';
import { ServicioComprasService } from '../lista-compras/servicio-compras.service';

@Injectable({
  providedIn: 'root',
})
export class ServicioRecetasService {
  recetas: Receta[] = [
    new Receta(
      'Omelette',
      'Una prueba para ver',
      'https://www.paulinacocina.net/wp-content/uploads/2019/09/okokokok.jpg',
      [new Ingrediente('Huevo', 2), new Ingrediente('Queso', 1)]
    ),
    new Receta(
      'Calabaza Rellena',
      'Otra prueba para ver',
      'https://www.clara.es/medio/2023/01/08/receta-calabaza-rellena-bolonesa_c46f79f3_1280x853.jpg',
      [new Ingrediente('Calabaza', 1), new Ingrediente('Carne', 200)]
    ),
  ];

  recetaSeleccionada: EventEmitter<Receta> = new EventEmitter();

  constructor(private servicioCompras: ServicioComprasService) {}

  getRecetas() {
    return this.recetas.slice();
  }

  getReceta(index: number) {
    return this.recetas.slice()[index];
  }

  agregarIngredientesEnListaDeCompras(ingredientes: Ingrediente[]){
    this.servicioCompras.agregarIngredientes(ingredientes);

  }

}