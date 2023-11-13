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
      'Receta de Prueba',
      'https://www.paulinacocina.net/wp-content/uploads/2019/09/okokokok.jpg',
      [new Ingrediente('Huevo', 2, 'unidades'), new Ingrediente('Queso', 20, 'grs')]
    ),
    new Receta(
      'Calabaza Rellena',
      'Otra prueba para ver',
      'https://www.clara.es/medio/2023/01/08/receta-calabaza-rellena-bolonesa_c46f79f3_1280x853.jpg',
      [new Ingrediente('Calabaza', 1, 'unidad'), new Ingrediente('Carne', 200, 'grs')]
    ),
    new Receta(
      'Spaguetti con bolognesa',
      'Otra prueba para ver',
      'https://img-global.cpcdn.com/recipes/f4602e2b1a90452c/400x400cq70/photo.jpg',
      [new Ingrediente('Calabaza', 1, 'unidad'), new Ingrediente('Carne', 200, 'grs')]
    ),
    new Receta(
      'Milanesa con papas fritas',
      'Otra prueba para ver',
      'https://vinomanos.com/wp-content/uploads/2019/02/milanesas-receta.jpg',
      [new Ingrediente('Calabaza', 1, 'unidad'), new Ingrediente('Carne', 200, 'grs')]
    ),
    new Receta(
      'Calabaza Rellena',
      'Otra prueba para ver',
      'https://www.clara.es/medio/2023/01/08/receta-calabaza-rellena-bolonesa_c46f79f3_1280x853.jpg',
      [new Ingrediente('Calabaza', 1, 'unidad'), new Ingrediente('Carne', 200, 'grs')]
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