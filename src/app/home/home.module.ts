import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RecetasComponent } from './recetas/recetas.component';
import { ItemRecetaComponent } from './recetas/lista-recetas/item-receta/item-receta.component';
import { DetalleRecetaComponent } from './recetas/detalle-receta/detalle-receta.component';
import { EditarCompraComponent } from './lista-compras/editar-compra/editar-compra.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';


@NgModule({
  declarations: [
    ItemRecetaComponent,
    DetalleRecetaComponent,
    ListaRecetasComponent,
    ListaComprasComponent,
    EditarCompraComponent,
    RecetasComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
