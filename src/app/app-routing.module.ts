import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListCardComponent } from './list-card/list-card.component';
import { DescripcionProductoComponent } from './descripcion-producto/descripcion-producto.component';


const routes: Routes = [
  { path: '', component: ListCardComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalle', component: DescripcionProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
