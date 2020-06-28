import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import	{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ListCardComponent } from './list-card/list-card.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { NavbarComponent} from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListCardComponent,
    CatalogoComponent,
    TablaProductosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
