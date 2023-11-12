import { EventEmitter, Injectable, Output } from '@angular/core';
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

  ingredienteEditable: number=0;

  getIngredientes() {
    return this.ingredientes;
  }

  getIngrediente(indice: number){
    return this.ingredientes[indice];
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

  ingredinteParaEditar(indice:number){
    this.ingredienteEditable= indice;
  }
  
  editarIngrediente(ingrediente: Ingrediente){
    this.ingredientes[this.ingredienteEditable]=ingrediente;
  }

  eliminarIngrediente(indice: number){
    this.ingredientes.splice(indice, 1);
  }

  vaciarLista(){
    this.ingredientes.splice(0,this.ingredientes.length);
  }

}
