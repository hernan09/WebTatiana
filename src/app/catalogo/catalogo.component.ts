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
  urlProd:string='https://serviciosmundosublimado.herokuapp.com/';

  url:string=this.urlDev;


  constructor(private http:HttpClient,private animateScrollService: NgAnimateScrollService, private utilsService:UtilsService) { }

  ngOnInit(): void {

    //this.getListaCatalogo()
    this.getCategoria();

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
  }

  
  productoSeleccionado(producto,indice){
    console.log('categoria',producto);
    console.log('indice',indice);
    this.indiceSeleccionado = indice;
    //this.navigateToHeader(indice);
    this.getProducto(producto._id)
  }

  getProducto(id){
    console.log("estoy en producto GET");
    this.utilsService.getConfig(this.url+'producto/'+id)
      .subscribe((data) => {
        console.log("data->",data);
        this.getArrayProducto(data);
      });
  }

  getArrayProducto(data){
    this.listProducto = data.producto;
  }
 

}
