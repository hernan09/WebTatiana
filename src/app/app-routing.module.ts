import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListCardComponent } from './list-card/list-card.component';
import { HomeComponent } from './home/home.component'



const routes: Routes = [
  { path: '', component: ListCardComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path:'inicio', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
