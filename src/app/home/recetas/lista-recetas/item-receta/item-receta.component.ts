import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';

@Component({
  selector: 'app-item-receta',
  templateUrl: './item-receta.component.html',
  styleUrls: ['./item-receta.component.css']
})
export class ItemRecetaComponent {

  @Input() receta: Receta= new Receta('', '', '');
  @Output() seleccion: EventEmitter<void>= new EventEmitter();


  seleccionar(){
    this.seleccion.emit();
  }

  

}
