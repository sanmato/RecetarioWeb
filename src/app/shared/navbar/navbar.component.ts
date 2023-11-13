import { Component } from '@angular/core';
import { ServicioDataStorage } from 'src/app/home/recetas/servicio-data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private servicioDataStorage: ServicioDataStorage) {}

  onAlmacenarInformacion() {
    this.servicioDataStorage.almacenarRecetas();
  }

  onObtenerInformacion() {
    this.servicioDataStorage.obtenerRecetas().subscribe();
  }
}
