import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  toggle:boolean = false;
  listCatalogo = [];
  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit(): void {

    this.getListaCatalogo()
  }

  toggleMenu(toggle){
    console.log("toggle menu");

    if(toggle) this.toggle = false;
    else this.toggle = true;
  }



  productoSeleccionado(producto,indice){
    console.log('producto',producto);
    console.log('indice',indice);
    this.navigateToHeader(indice);
  }

  navigateToHeader(id) {
    this.animateScrollService.scrollToElement(id.toString(), 500);
}


  getListaCatalogo(){

    this.listCatalogo = [
      {
        id:123,
        id_user:111,
        nombre:'BARBIJOS Y KIT DE HIGIENE',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'TELAS SUBLIMABLES',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'BOLSOS Y MOCHILAS',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'BILLETERAS',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'CARPETAS PARA SUBLIMAR',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'CARTUCHERAS Y PORTA COSMETICOS',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'LIBRERiA',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'PAD MOUSE Y DERIVADOS',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'ACCESORIOS SUBLIMABLES PARA LA MODA',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },      {
        id:123,
        id_user:111,
        nombre:'LLAVEROS Y ACCESORIOS PLASTICOS',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'FUNDAS PARA CELULAR',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'FUNDA DE TABLET Y NOTEBOOK',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'INSUMOS PARA SUBLIMACION',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'PRODUCTOS PARA IMPRESORAS INK JET',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'TAZAS CERAMICAS PARA SUBLIMAR',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'TAZAS PLASTICAS PARA SUBLIMAR',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'CARTON SUBLIMABLE',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'BOLSA DE FRISELINA',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'REMERAS PARA SUBLIMAR',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'PARCHES SUBLITEX PARA SUBLIMAR PRENDAS OSCURAS',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'GORRAS PARA SUBLIMAR',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'BEBE Y NIÑOS',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'MEDIAS Y ROPA INTERIOR',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'ALMOHADONES',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'CALZADO Y DEPORTES',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'MADERA SUBLIMABLE',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'MAQUINAS SUBLIMADORAS',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },{
        id:123,
        id_user:111,
        nombre:'IMPRESORAS Y PLOTTERS EPSON',
        precio:1,
        stock:2,
        descripcion:'Una descripcion',
        disponible:true,
        img:[
          {
            nombre:'',
            url:''
          }
        ]

      },
  ]
  }

}
