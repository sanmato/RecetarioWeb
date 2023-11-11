import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';

@Component({
  selector: 'app-item-receta',
  templateUrl: './item-receta.component.html',
  styleUrls: ['./item-receta.component.css'],
})
export class ItemRecetaComponent implements OnInit {
  @Input() receta: Receta = new Receta('', '', '');
  @Input() index: number = 0;

  ngOnInit(): void {}
}
