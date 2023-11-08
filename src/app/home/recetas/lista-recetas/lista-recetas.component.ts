import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css'],
})
export class ListaRecetasComponent implements OnInit {
  
  @Output() recetaSeleccionada: EventEmitter<Receta>= new EventEmitter();


  recetas: Receta[] = [
    new Receta( 'Test de Receta',
    'Una prueba para ver',
    'https://www.clara.es/medio/2023/01/08/receta-calabaza-rellena-bolonesa_c46f79f3_1280x853.jpg'),
    new Receta( 'Otro test de Receta',
    'Otra prueba para ver',
    'https://www.clara.es/medio/2023/01/08/receta-calabaza-rellena-bolonesa_c46f79f3_1280x853.jpg')
  ];


  constructor() {}

  ngOnInit(): void {}


  seleccionarReceta(receta: Receta){
    this.recetaSeleccionada.emit(receta);

  }
}
