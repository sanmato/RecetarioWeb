import { Injectable } from '@angular/core';
import { Ingrediente } from 'src/app/core/ingrediente.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioComprasService {
  ingredientes: Ingrediente[] = [
    new Ingrediente('manzanas', 5),
    new Ingrediente('kiwi', 12),
  ];

  constructor() {}

  getIngredientes() {
    return this.ingredientes;
  }

  agregarIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
  }
}
