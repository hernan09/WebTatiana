import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggle: boolean = false;
  listCatalogo = [];
  listProducto=[];
  QuestionAsnwer=[];
  indiceSeleccionado:number;
  constructor(private animateScrollService: NgAnimateScrollService) {
    
  }

  toggleMenu(toggle) {
    console.log('toggle menu');

    if (toggle) this.toggle = false;
    else this.toggle = true;
  }
  productoSeleccionado(producto,indice){
    console.log('producto',producto);
    console.log('indice',indice);
    this.indiceSeleccionado = indice;
    this.navigateToHeader(indice);
    
  }
  
  navigateToHeader(id) {
    this.animateScrollService.scrollToElement(id.toString(), 500);
}

  ngOnInit(): void {
    this.getListaCatalogo()
    this.getListaProductos()
    this.getquestionAndAnswer()
  }

  getquestionAndAnswer(){

    this.QuestionAsnwer = [
      {
        id: 123,
        id_user: 111,
        nombre: 'PREG FRECUENTES',
        precio: 1,
        stock: 2,
        preguntas:'como hago apra comprar la mochila ?',
        respuesta: 'accedes a la seccion de mochilas tomas su numero de bla bla bla...',
        disponible: false,
        input_true_false:true,      
        img: [
          {
            nombre: '',
            url: '',
          },
        ],
      },
    ]
  }

  getListaCatalogo() {
    this.listCatalogo = [
      {
        id: 1,
        id_user: 111,
        nombre: 'SLIDE',
        precio: 1,
        stock: 2,
        title:'TITLE 1',
        descripcion: 'Una descripcion',
        disponible: true,
        input_true_false:false,
        img: [
          {
            nombre: '',
            url: '',
          },
        ],
      },
      {
        id: 2,
        id_user: 111,
        nombre: 'MAS VENDIDOS',
        precio: 1,
        stock: 2,
        title:'TITLE 2',
        descripcion: 'Una descripcion',
        disponible: true,
        input_true_false:true,      
        img: [
          {
            nombre: '',
            url: '',
          },
        ],
      },
    ];
  }


  getListaProductos(){

    this.listProducto = [
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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ]
        ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

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
            url:'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg'
          }
        ] ,
        precioMinorista:'500$',
        precioMayorista:'300$'

      }
  ]
  }
}
