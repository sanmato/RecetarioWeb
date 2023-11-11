import { Injectable } from '@angular/core';
import { Ingrediente } from 'src/app/core/ingrediente.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioComprasService {
  ingredientes: Ingrediente[] = [
    new Ingrediente('manzanas', 5, 'unidades'),
    new Ingrediente('kiwi', 12, 'unidades'),
  ];

  constructor() {}

  getIngredientes() {
    return this.ingredientes;
  }

  agregarIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
  }

  agregarIngredientes(ingredientes: Ingrediente[]){
    for(let ingrediente of ingredientes){
      this.agregarIngrediente(ingrediente);
    }
    alert('Los ingredientes fueron agregados con éxito');
  }
}
