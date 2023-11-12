import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicioRecetasService } from '../servicio-recetas.service';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.component.html',
  styleUrls: ['./editar-receta.component.css'],
})
export class EditarRecetaComponent implements OnInit {
  id: number = 0;
  modoEdicion = false;
  formReceta!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private servicioReceta: ServicioRecetasService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.modoEdicion = params['id'] != null;
      this.inicializarFormulario();
    });
  }

  inicializarFormulario() {
    let nombreReceta = '';
    let imagenReceta = '';
    let descripcionReceta = '';

    if (this.modoEdicion) {
      const receta = this.servicioReceta.getReceta(this.id);
      nombreReceta = receta.nombre;
      imagenReceta = receta.rutaImagen;
      descripcionReceta = receta.descripcion;
    }

    this.formReceta = new FormGroup({
      nombre: new FormControl(nombreReceta),
      rutaImagen: new FormControl(imagenReceta),
      descripcion: new FormControl(descripcionReceta),
    });
  }
}
