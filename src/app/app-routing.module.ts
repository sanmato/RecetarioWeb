import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ListaComprasComponent } from './home/lista-compras/lista-compras.component';
import { RecetasComponent } from './home/recetas/recetas.component';
import { RecetaInicioComponent } from './home/recetas/receta-inicio/receta-inicio.component';
import { DetalleRecetaComponent } from './home/recetas/detalle-receta/detalle-receta.component';
import { EditarCompraComponent } from './home/lista-compras/editar-compra/editar-compra.component';
import { EditarRecetaComponent } from './home/recetas/editar-receta/editar-receta.component';
import { EditarIngredienteComponent } from './home/lista-compras/editar-ingrediente/editar-ingrediente.component';
import { ServicioRecetasResolver } from './home/recetas/servicio-recetas-resolver.service';

const routes: Routes = [
  // { path: 'home', component: HomePageComponent },
  {
    path: 'recetas',
    component: RecetasComponent,
    children: [
      { path: '', component: RecetaInicioComponent },
      { path: 'new', component: EditarRecetaComponent },
      {
        path: ':id',
        component: DetalleRecetaComponent,
        resolve: [ServicioRecetasResolver],
      },
      {
        path: ':id/editar',
        component: EditarRecetaComponent,
        resolve: [ServicioRecetasResolver],
      },
    ],
  },
  { path: 'listacompras', component: ListaComprasComponent },
  // {
  //   path: '**',
  //   component: HomePageComponent,
  //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
