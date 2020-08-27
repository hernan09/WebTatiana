import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../app/utils.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent implements OnInit {
  toggle:boolean = false;
  listCatalogo = [];
  listProducto = [];
  indiceSeleccionado:number;
  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviceemds.herokuapp.com/';
  arrayNovedades = [];
  url:string=this.urlProd;
  showLoading:boolean=false;
  pdf:string;

  getCategoriaSeleccioandaDesdeHome:any;
  constructor(private http:HttpClient,private animateScrollService: NgAnimateScrollService, private utilsService:UtilsService) { }

  ngOnInit(): void {
    if(!this.utilsService.getSelectCategoria())  this.getNodevedades();
    else this.productoSeleccionadoDesdeHome(this.utilsService.getSelectCategoria());
    this.getCategoria();
    this.getPdf();

    //this.getListaCatalogo()


  }

  getNodevedades(){
    this.showLoading=true;

    console.log("estoy en categorias GET");//_id que te genera mongo

    this.utilsService.getConfig(this.url+'novedades')
      .subscribe((data) => {
        console.log("novedades->",data);
        this.showLoading=false;

        this.getArrayNovedades(data);
      });
  }

  getArrayNovedades(data){
    this.arrayNovedades = data.producto
  }

  //aca voy a pegarle al endpoint de emi
  getJson(){
    return this.http.get('this._jsonURL').subscribe((resp:any)=>{
    })
  }

  toggleMenu(toggle){
    console.log("toggle menu");

    if(toggle) this.toggle = false;
    else this.toggle = true;
  }

  navigateToHeader(id) {
    this.animateScrollService.scrollToElement(id.toString(), 500);
  }

  getCategoria(){
    console.log("estoy en categorias GET");//_id que te genera mongo

    this.utilsService.getConfig(this.url+'categoria')
      .subscribe((data) => {
        console.log("categoria->",data);
        this.getArrayCategoria(data)
      });

  }

  getArrayCategoria(data){
    this.listCatalogo = data.categoria

    const index = this.listCatalogo.findIndex(categoria => categoria.nombre === this.getCategoriaSeleccioandaDesdeHome.nombre);
    console.log("index=>", index);
    this.indiceSeleccionado =index;
  }


  productoSeleccionadoDesdeHome(producto){
    console.log('categoria2222',producto);
    this.getCategoriaSeleccioandaDesdeHome = producto;
    let indice =1
    this.indiceSeleccionado = indice;
    //this.navigateToHeader(indice);
    this.getProducto(producto._id)
  }

  
  productoSeleccionado(producto,indice){
    console.log('categoria',producto);
    console.log('indice',indice);
    this.indiceSeleccionado = indice;
    //this.navigateToHeader(indice);
    this.getProducto(producto._id)
  }

  getProducto(id){
    this.showLoading=true;
    console.log("estoy en producto GET");
    this.utilsService.getConfig(this.url+'producto/'+id)
      .subscribe((data) => {
        console.log("data->",data);
        this.getArrayProducto(data);
      });
  }
  
  getPdf(){
    this.showLoading=true;
    console.log("estoy en producto GET");
    this.utilsService.getConfig(this.url+'pdf')
      .subscribe((data) => {
        console.log("data->",data);
        this.getArrayPdf(data);
      });
  }

  getArrayPdf(data){
    console.log("pdf",data)
    this.pdf = data.pdf[0].pdf;
  }

  getArrayProducto(data){
    this.showLoading=false;

    this.listProducto = data.producto;
  }

  download2() {
    window.open(this.pdf);
  }
 

}
