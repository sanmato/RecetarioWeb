import { EventEmitter, Injectable } from '@angular/core';
import { Ingrediente } from 'src/app/core/ingrediente.model';
import { Receta } from 'src/app/core/receta.model';
import { ServicioComprasService } from '../lista-compras/servicio-compras.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioRecetasService {
  recetasCambiadas = new Subject<Receta[]>();
  // recetas: Receta[] = [
  //   new Receta(
  //     'Omelette',
  //     'Una prueba para ver',
  //     'https://www.paulinacocina.net/wp-content/uploads/2019/09/okokokok.jpg',
  //     [
  //       new Ingrediente('Huevo', 2, 'unidades'),
  //       new Ingrediente('Queso', 20, 'grs'),
  //     ]
  //   ),
  //   new Receta(
  //     'Calabaza Rellena',
  //     'Otra prueba para ver',
  //     'https://www.clara.es/medio/2023/01/08/receta-calabaza-rellena-bolonesa_c46f79f3_1280x853.jpg',
  //     [
  //       new Ingrediente('Calabaza', 1, 'unidad'),
  //       new Ingrediente('Carne', 200, 'grs'),
  //     ]
  //   ),
  // ];

  private recetas: Receta[] = [];

  sobrescribirRecetas(recetas: Receta[]) {
    this.recetas = recetas;
    this.recetasCambiadas.next(this.recetas.slice());
  }

  recetaSeleccionada: EventEmitter<Receta> = new EventEmitter();

  constructor(private servicioCompras: ServicioComprasService) {}

  getRecetas() {
    return this.recetas.slice();
  }

  getReceta(index: number) {
    return this.recetas.slice()[index];
  }

  agregarIngredientesEnListaDeCompras(ingredientes: Ingrediente[]) {
    this.servicioCompras.agregarIngredientes(ingredientes);
  }

  agregarReceta(receta: Receta) {
    this.recetas.push(receta);
    this.recetasCambiadas.next(this.recetas.slice());
  }

  actualizarReceta(indice: number, nuevaReceta: Receta) {
    this.recetas[indice] = nuevaReceta;
    this.recetasCambiadas.next(this.recetas.slice());
  }

  eliminarReceta(indice: number) {
    this.recetas.splice(indice, 1);
    this.recetasCambiadas.next(this.recetas.slice());
  }
}
