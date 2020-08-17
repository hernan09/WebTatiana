import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import	{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardComponent } from './list-card/list-card.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { DescripcionProductoComponent } from './descripcion-producto/descripcion-producto.component';
import { NavbarComponent} from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeslideComponent } from './dashboard/homeslide/homeslide.component'
import { PopupComponent } from './dashboard/popup/popup.component';
import { ComprarComponent } from './comprar/comprar.component';
import { ProductosComponent } from './dashboard/productos/productos.component';
import { PreguntasComponent } from './dashboard/preguntas/preguntas.component';
import { NoticiasComponent } from './dashboard/noticias/noticias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PregfrecuentesComponent } from './pregfrecuentes/pregfrecuentes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BannerenviosComponent } from './bannerenvios/bannerenvios.component';
import { FilterPipe } from './pipes/filterdash/filter.pipe';
import { FilterPipe2 } from './pipes/pipefilter/search.pipe';
import { CategoriaComponent } from './dashboard/categoria/categoria.component'
import { SimpleModalModule } from 'ngx-simple-modal';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    CatalogoComponent,
    TablaProductosComponent,
    DescripcionProductoComponent,
    NavbarComponent,
    HomeComponent,
    ContactFooterComponent,
    LoginComponent,
    DashboardComponent,
    HomeslideComponent,
    ComprarComponent,
    ProductosComponent,
    PreguntasComponent,
    NoticiasComponent,
    PregfrecuentesComponent,
    ContactoComponent,
    BannerenviosComponent,
    FilterPipe,
    FilterPipe2,
    CategoriaComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleModalModule,
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
