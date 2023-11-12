import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/core/ingrediente.model';
import { ServicioComprasService } from './servicio-compras.service';
import { EditarIngredienteComponent } from './editar-ingrediente/editar-ingrediente.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
})
export class ListaComprasComponent implements OnInit {
  ingredientes: Ingrediente[] = [];

  constructor(private servicioCompras: ServicioComprasService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(){
    this.ingredientes=this.servicioCompras.getIngredientes();
  }


  public editarIngrediente(i: number) {

    this.servicioCompras.ingredinteParaEditar(i);

    const dialogRef = this.dialog.open(EditarIngredienteComponent, { data: this.servicioCompras.getIngrediente(i) , height: '400px', width: '350px'});
    
    dialogRef.afterClosed().subscribe(() => {
      console.log('El cuadro de diálogo se cerró');
    });
  }

  public eliminarIngrediente(indice: number){
    if(confirm("Esta seguro que desea eliminar el ingrediente de la lista?")){
    this.servicioCompras.eliminarIngrediente(indice);
    }
  }

  vaciarLista(){
    if(confirm("Esta seguro que quiere vaciar la lista?")){
      this.servicioCompras.vaciarLista();
      }
  }
  
}
