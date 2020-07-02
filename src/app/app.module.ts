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
import { DashboardComponent } from './dashboard/dashboard.component'




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
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
