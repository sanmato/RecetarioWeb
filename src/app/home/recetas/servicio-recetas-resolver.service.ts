import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Receta } from 'src/app/core/receta.model';
import { ServicioDataStorage } from './servicio-data-storage.service';
import { ServicioRecetasService } from './servicio-recetas.service';

@Injectable({ providedIn: 'root' })
export class ServicioRecetasResolver implements Resolve<Receta[]> {
  constructor(
    private servicioDataStorage: ServicioDataStorage,
    private servicioRecetas: ServicioRecetasService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recetas = this.servicioRecetas.getRecetas();
    if (recetas.length == 0) {
      return this.servicioDataStorage.obtenerRecetas();
    } else {
      return recetas;
    }
  }
}
