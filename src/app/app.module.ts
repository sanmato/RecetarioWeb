import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { DetalleRecetaComponent } from './recetas/detalle-receta/detalle-receta.component';
import { ItemRecetaComponent } from './recetas/lista-recetas/item-receta/item-receta.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { EditarCompraComponent } from './lista-compras/editar-compra/editar-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    ListaRecetasComponent,
    DetalleRecetaComponent,
    ItemRecetaComponent,
    ListaComprasComponent,
    EditarCompraComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
