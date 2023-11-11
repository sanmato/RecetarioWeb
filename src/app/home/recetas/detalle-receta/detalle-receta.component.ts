import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';
import { ServicioRecetasService } from '../servicio-recetas.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.component.html',
  styleUrls: ['./detalle-receta.component.css'],
})
export class DetalleRecetaComponent implements OnInit {
  receta: Receta = new Receta('', '', '', []);
  id: number = 0;

  constructor(
    private servicioReceta: ServicioRecetasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.receta = this.servicioReceta.getReceta(this.id);
    });
  }

  agregarEnListaDeCompras(){
    this.servicioReceta.agregarIngredientesEnListaDeCompras(this.receta.ingredientes);
  }
}
