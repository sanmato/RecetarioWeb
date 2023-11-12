import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/core/ingrediente.model';
import { ServicioComprasService } from './servicio-compras.service';
import { EditarIngredienteComponent } from './editar-ingrediente/editar-ingrediente.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
})
export class ListaComprasComponent implements OnInit {
  ingredientes: Ingrediente[] = [];

  constructor(private servicioCompras: ServicioComprasService, private dialog: MatDialog) {}

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
  
}
