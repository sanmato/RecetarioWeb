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

<<<<<<< HEAD
  ngOnInit() {
    this.recetas = this.servicioReceta.getRecetas();
=======
  constructor(private servicioReceta:ServicioRecetasService) {}

  ngOnInit(){
    this.recetas=this.servicioReceta.getRecetas();
>>>>>>> 4dae1e03a961cd423b42acc1e5503663a5fc4b60
  }

  agregarReceta() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
