import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/core/ingrediente.model';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
})
export class ListaComprasComponent implements OnInit {
  ingredientes: Ingrediente[] = [new Ingrediente('Naranjas', 5)];

  constructor() {}

  ngOnInit(): void {}
}
