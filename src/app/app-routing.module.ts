import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListCardComponent } from './list-card/list-card.component';
import { DescripcionProductoComponent } from './descripcion-producto/descripcion-producto.component';
import { HomeComponent } from './home/home.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalle', component: DescripcionProductoComponent },
  { path:'inicio', component: HomeComponent},
  { path: 'galeria', component:ListCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
