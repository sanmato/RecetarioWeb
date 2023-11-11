import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';
import { ServicioRecetasService } from '../servicio-recetas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css'],
})
export class ListaRecetasComponent implements OnInit {
  recetas: Receta[] = [];

  constructor(
    private servicioReceta: ServicioRecetasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recetas = this.servicioReceta.getRecetas();
  }

  agregarReceta() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
