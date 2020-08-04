import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../app/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrayImages=[];
  arrayNovedades=[];
  arrayCategoria=[];
  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviceemds.herokuapp.com/';
  showLoading:boolean;
  url:string=this.urlDev;
  constructor(private router: Router, private utilsService:UtilsService) { }
  

  ngOnInit(): void {
    this.getSlide();
    this.getNodevedades();
    this.getCategoria();
  }

  gotoPage(name:string){
    console.log(`voy a  ${name}`);
    this.router.navigate([`${name}`]);
  }

   //---------------------------------inicio home
   getSlide(){
    console.log("estoy en categorias GET");//_id que te genera mongo

    this.utilsService.getConfig(this.url+'slide')
      .subscribe((data) => {
        console.log("slide->",data);
        this.getArraySlide(data);
      });

  }

  getArraySlide(data){
    this.arrayImages = data.slide
  }

  getNodevedades(){
    this.showLoading = true;
    console.log("estoy en categorias GET");//_id que te genera mongo

    this.utilsService.getConfig(this.url+'novedades')
      .subscribe((data) => {
        console.log("novedades->",data);
        this.getArrayNovedades(data);
      });

  }

  getArrayNovedades(data){
    this.showLoading = false;
    this.arrayNovedades = data.producto
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
    this.arrayCategoria = data.categoria
  }


  //------------------------

  postCategoria(){
    console.log("estoy en categorias POST");

    let obj = {
        id_admin:1,
        nombre: 'Madera3',
        descripcion: 'Maderapara exteriores',
        disponible: true,
        stock: 10,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/16_wood_samples.jpg'
    }

    this.utilsService.postConfig(this.url+'categoria',obj) 
      .subscribe( 
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );

  }


  putCategoria(){
    console.log("estoy en categorias PUT");

    let obj = {
        id_admin:1,
        nombre: 'Madera testtest final',
        descripcion: 'Maderapara exteriores', 
        disponible: true,
        stock: 10000000000000,
    }

    let id = "5f112fc514efaa5550b03771"

    this.utilsService.putConfig(this.url+'categoria/'+id,obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );

  }


  deleteCategoria(){
    console.log("estoy en categorias DELETE");

    let id = "5f112fc514efaa5550b03771";

    this.utilsService.deleteConfig(this.url+'categoria/'+id)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  }


  //---------------------------------Porducto

  getProducto(){
    console.log("estoy en producto GET");
    let id= 1;
    this.utilsService.getConfig(this.url+'producto/'+id)
      .subscribe((data) => {
        console.log("data->",data);
      });
  }

  postProducto() {
    console.log("estoy en producto POST");

    let obj = {
        id_admin:1,
        id_catalogo:2,
        nombre: 'madera 12',
        descripcion: 'Maderapara exteriores',
        disponible: true,
        stock: 10,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/16_wood_samples.jpg'
    }

    this.utilsService.postConfig(this.url+'producto',obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );

  }


  putProducto(){
    console.log("estoy en producto PUT");

    let obj = {
        id_admin:1,
        id_catalogo:1,
        nombre: 'Madera testtest update',
        descripcion: 'Maderapara exteriores',
        disponible: true,
        stock: 10000000000000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/16_wood_samples.jpg'
    }

    let id = "5f137680af4ee3182872d0bd";

    this.utilsService.putConfig(this.url+'producto/'+id,obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  }

  deleteProducto(){
    console.log("estoy en producto DELETE");

    let id = "5f137680af4ee3182872d0bd";

    this.utilsService.deleteConfig(this.url+'producto/'+id)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  } 


  //---------------------------------Como comprar

  getComprar(){
    console.log("estoy en compra GET");
    this.utilsService.getConfig(this.url+'compra')
      .subscribe((data) => {
        console.log("data->",data);
      });
  }

  postComprar() {
    console.log("estoy en compra POST");

    let obj = {
      id_admin:1,
      pregunta: 'pregunta 1',
      respuesta: 'respuesta 1',
    }

    this.utilsService.postConfig(this.url+'compra',obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );

  }


  putComprar(){
    console.log("estoy en compra PUT");

    let obj = {
      id_admin: 1,
      pregunta: 'pregunta 2',
      respuesta: 'respuesta 1',
    }

    let id = "5f13fd1885640842f47103ac";

    this.utilsService.putConfig(this.url+'compra/'+id,obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  }

  deleteComprar(){
    console.log("estoy en compra DELETE");

    let id = "5f13fd1885640842f47103ac";

    this.utilsService.deleteConfig(this.url+'compra/'+id)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  }


  //---------------------------------Pregunta Frecuentes

  getPreFre(){
    console.log("estoy en prefre GET");
    this.utilsService.getConfig(this.url+'prefre')
      .subscribe((data) => {
        console.log("data->",data);
      });
  }

  postPreFre() {
    console.log("estoy en prefre POST");

    let obj = {
      id_admin:1,
      pregunta: 'pregunta 1',
      respuesta: 'respuesta 1',
    }

    this.utilsService.postConfig(this.url+'prefre',obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );

  }


  putPreFre(){
    console.log("estoy en prefre PUT");

    let obj = {
      id_admin: 1,
      pregunta: 'pregunta 2',
      respuesta: 'respuesta 2',
    }

    let id ="5f13fc10333bd65298e4c0f4";

    this.utilsService.putConfig(this.url+'prefre/'+id,obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  }

  deletePreFre(){
    console.log("estoy en prefre DELETE");

    let id = "5f13fc10333bd65298e4c0f4";

    this.utilsService.deleteConfig(this.url+'prefre/'+id)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  } 
   //---------------------------------search

   search(){
      console.log("estoy en search GET");
      let nombre= 'tex';
      this.utilsService.getConfig(this.url+'buscar/'+nombre)
        .subscribe((data) => {
          console.log("data->",data);
        });
   }
}
