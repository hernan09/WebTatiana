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
  arrayImages=[]
  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviciosmundosublimado.herokuapp.com/';

  url:string=this.urlProd;
  constructor(private router: Router, private utilsService:UtilsService) { }
  

  ngOnInit(): void {
    this.getImages()
    console.log(this.getImages())
  }

  gotoPage(name:string){
    console.log(`voy a  ${name}`);
    this.router.navigate([`${name}`]);
  }


  getImages(){
    this.arrayImages=[
      { id:"1",
        title:"Madera",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/madera.jpg"
      },
      { id:"2",
        title:"Vinilo",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/vinilo.png"
      },
      { id:"3",
        title:"Textil",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/textil.jpg"
      },
      { id:"4",
        title:"Hoja lata",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/lata.jpg"
      },
      { id:"5",
        title:"Cueros",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/cueros.jpg"
      },
      { id:"6",
        title:"Plasticos",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/plastico2.jpg"
      },
      
    ]
  }



  getCategoria(){
    console.log("estoy en categorias GET");//_id que te genera mongo

    this.utilsService.getConfig(this.url+'/categoria')
      .subscribe((data) => {
        console.log("data->",data);
      });

  }

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

    this.utilsService.postConfig('http://localhost:3000/categoria',obj)
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

    this.utilsService.putConfig('http://localhost:3000/categoria/'+id,obj)
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

    this.utilsService.deleteConfig('http://localhost:3000/categoria/'+id)
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

  getProducto(id){
    console.log("estoy en producto GET");
    let id= 1;
    this.utilsService.getConfig('http://localhost:3000/producto/'+id)
      .subscribe((data) => {
        console.log("data->",data);
      });
  }

  postProducto(){
    console.log("estoy en producto POST");

    let obj = {
        id_admin:1,
        id_catalogo:2,
        nombre: 'textil 1',
        descripcion: 'Maderapara exteriores',
        disponible: true,
        stock: 10,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/16_wood_samples.jpg'
    }

    this.utilsService.postConfig('http://localhost:3000/producto',obj)
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

    this.utilsService.putConfig('http://localhost:3000/producto/'+id,obj)
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

    this.utilsService.deleteConfig('http://localhost:3000/producto/'+id)
      .subscribe(
        (data) => {
          console.log("data->",data);
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  } 
}
