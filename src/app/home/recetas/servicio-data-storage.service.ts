import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receta } from 'src/app/core/receta.model';
import { ServicioRecetasService } from './servicio-recetas.service';
import { map, tap } from 'rxjs';
import { servicioAuth } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ServicioDataStorage {
  constructor(
    private http: HttpClient,
    private servicioRecetas: ServicioRecetasService,
    private servicioAuth: servicioAuth
  ) {}

  almacenarRecetas() {
    const recetas = this.servicioRecetas.getRecetas();
    return this.http
      .put(
        'https://ng-recetario-web-default-rtdb.firebaseio.com/recetas.json',
        recetas
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  obtenerRecetas() {
    return this.http
      .get<Receta[]>(
        'https://ng-recetario-web-default-rtdb.firebaseio.com/recetas.json'
      )
      .pipe(
        map((recetas) => {
          return recetas.map((receta) => {
            return {
              ...receta,
              ingredientes: receta.ingredientes ? receta.ingredientes : [],
            };
          });
        }),
        tap((recetas) => {
          this.servicioRecetas.sobrescribirRecetas(recetas);
        })
      );
  }
}
