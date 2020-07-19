import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ListCardComponent } from './list-card/list-card.component';
import { DescripcionProductoComponent } from './descripcion-producto/descripcion-producto.component';
import { HomeComponent } from './home/home.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeslideComponent } from './dashboard/homeslide/homeslide.component';
import { ComprarComponent } from './comprar/comprar.component';
import { ProductosComponent } from './dashboard/productos/productos.component'
import { PreguntasComponent } from './dashboard/preguntas/preguntas.component';
import { PregfrecuentesComponent } from  './pregfrecuentes/pregfrecuentes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BannerenviosComponent } from './bannerenvios/bannerenvios.component';
import { CategoriaComponent } from './dashboard/categoria/categoria.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalle', component: DescripcionProductoComponent },
  { path:'inicio', component: HomeComponent},
  { path: 'galeria', component:ListCardComponent },
  { path: 'footer', component:ContactFooterComponent },
  { path:'login', component:LoginComponent },
  { path:'dasboard', component:DashboardComponent},
  { path:'dasboard/slide',component:HomeslideComponent },
  { path:'comprar',component:ComprarComponent },
  { path:'dasboard/producto',component:ProductosComponent },
  { path:'dasboard/preguntas',component:PreguntasComponent },
  { path:'preguentas',component:PregfrecuentesComponent  },
  { path:'contacto',component:ContactoComponent },
  { path:'bannerenvios',component:BannerenviosComponent },
  { path:'dasboard/categorias',component:CategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
