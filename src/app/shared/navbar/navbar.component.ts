import { Component } from '@angular/core';
import { servicioAuth } from 'src/app/auth/auth.service';
import { ServicioDataStorage } from 'src/app/home/recetas/servicio-data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private servicioDataStorage: ServicioDataStorage, private servicioAuth: servicioAuth) {}

  onAlmacenarInformacion() {
    this.servicioDataStorage.almacenarRecetas();
  }

  onObtenerInformacion() {
    this.servicioDataStorage.obtenerRecetas().subscribe();
  }

  cerrarSesion(){
    this.servicioAuth.logOut();
  }
}
