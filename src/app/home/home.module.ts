import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RecetasComponent } from './recetas/recetas.component';
import { ItemRecetaComponent } from './recetas/lista-recetas/item-receta/item-receta.component';
import { EditarCompraComponent } from './lista-compras/editar-compra/editar-compra.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecetaInicioComponent } from './recetas/receta-inicio/receta-inicio.component';
import { EditarRecetaComponent } from './recetas/editar-receta/editar-receta.component';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { DetalleRecetaComponent } from './recetas/detalle-receta/detalle-receta.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarIngredienteComponent } from './lista-compras/editar-ingrediente/editar-ingrediente.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DetalleRecetaComponent,
    ListaRecetasComponent,
    ListaComprasComponent,
    EditarCompraComponent,
    RecetasComponent,
    HeaderComponent,
    HomePageComponent,
    RecetaInicioComponent,
    EditarRecetaComponent,
    ItemRecetaComponent,
    EditarIngredienteComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    BrowserModule,
  ],
})
export class HomeModule {}
