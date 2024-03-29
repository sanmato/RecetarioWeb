import { Component, OnDestroy, OnInit } from '@angular/core';

import { Receta } from 'src/app/core/receta.model';
import { ServicioRecetasService } from '../servicio-recetas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ServicioDataStorage } from '../servicio-data-storage.service';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css'],
})
export class ListaRecetasComponent implements OnInit, OnDestroy {
  recetas: Receta[] = [];
  subscription: Subscription | undefined;

  constructor(
    private servicioReceta: ServicioRecetasService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorage: ServicioDataStorage
  ) {}

  ngOnInit() {
    this.subscription = this.servicioReceta.recetasCambiadas.subscribe(
      (recetas: Receta[]) => {
        this.recetas = recetas;
      }
    );
    this.recetas = this.servicioReceta.getRecetas();
    this.dataStorage.obtenerRecetas().subscribe();
  }

  agregarReceta() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
