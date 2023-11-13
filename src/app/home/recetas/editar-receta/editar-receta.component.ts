import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicioRecetasService } from '../servicio-recetas.service';
import { Receta } from 'src/app/core/receta.model';

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
    private servicioReceta: ServicioRecetasService,
    private router: Router
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
    let ingredientesReceta = new FormArray<FormGroup>([]);

    if (this.modoEdicion) {
      const receta = this.servicioReceta.getReceta(this.id);
      nombreReceta = receta.nombre;
      imagenReceta = receta.rutaImagen;
      descripcionReceta = receta.descripcion;

      if (receta['ingredientes']) {
        for (let ingrediente of receta.ingredientes) {
          ingredientesReceta.push(
            new FormGroup({
              nombre: new FormControl(ingrediente.nombre, Validators.required),
              cantidad: new FormControl(ingrediente.cantidad, [
                Validators.required,
                Validators.pattern(/^[1-9]+[+-9]*$/),
              ]),
              unidad: new FormControl(ingrediente.unidad, Validators.required),
            })
          );
        }
      }
    }

    this.formReceta = new FormGroup({
      nombre: new FormControl(nombreReceta, Validators.required),
      rutaImagen: new FormControl(imagenReceta, Validators.required),
      descripcion: new FormControl(descripcionReceta, Validators.required),
      ingredientes: ingredientesReceta,
    });
  }

  get controls() {
    return (<FormArray>this.formReceta.get('ingredientes')).controls;
  }

  agregarIngrediente() {
    (<FormArray>this.formReceta.get('ingredientes')).push(
      new FormGroup({
        nombre: new FormControl(null, Validators.required),
        cantidad: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[+-9]*$/),
        ]),
        unidad: new FormControl(null, Validators.required),
      })
    );
  }

  guardarInformacion() {
    if (this.modoEdicion) {
      this.servicioReceta.actualizarReceta(this.id, this.formReceta.value);
    } else {
      this.servicioReceta.agregarReceta(this.formReceta.value);
    }
    this.onCancelar();
  }

  onCancelar() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onEliminarIngrediente(indice: number) {
    (<FormArray>this.formReceta.get('ingredientes')).removeAt(indice);
  }
}
