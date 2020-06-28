import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListCardComponent } from './list-card/list-card.component';


const routes: Routes = [
  { path: '', component: ListCardComponent },
  { path: 'catalogo', component: CatalogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
