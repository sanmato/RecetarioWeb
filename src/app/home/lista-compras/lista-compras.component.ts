import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/core/ingrediente.model';
import { ServicioComprasService } from './servicio-compras.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
})
export class ListaComprasComponent implements OnInit {
  ingredientes: Ingrediente[] = [new Ingrediente('Naranjas', 5, 'unidades')];

  constructor(private servicioCompras: ServicioComprasService) {}

  ngOnInit(){
    this.ingredientes=this.servicioCompras.getIngredientes();
  }
}
