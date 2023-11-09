import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ListaComprasComponent } from './home/lista-compras/lista-compras.component';

const routes: Routes = [
  {path:'home',
  component: HomePageComponent
  },
  {path:'listacompras',
  component: ListaComprasComponent
  },
  {path:'**',
  component: HomePageComponent,
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
