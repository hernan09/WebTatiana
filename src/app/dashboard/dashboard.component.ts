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
  listProducto = [];
  QuestionAsnwer = [];
  NoticiasArray = [];
  listCategory=[];
  indiceSeleccionado: number;

  constructor(private animateScrollService: NgAnimateScrollService) {}

  toggleMenu(toggle) {
    console.log('toggle menu');

    if (toggle) this.toggle = false;
    else this.toggle = true;
  }
  productoSeleccionado(producto, indice) {
    console.log('producto', producto);
    console.log('indice', indice);
    this.indiceSeleccionado = indice;
    this.navigateToHeader(indice);
  }

  navigateToHeader(id) {
    this.animateScrollService.scrollToElement(id.toString(), 500);
  }

  ngOnInit(): void {
    this.getListaCatalogo();
    this.getListaProductos();
    this.getquestionAndAnswer();
    this.getListNoticias();
    this.getCategory()
  }

  getquestionAndAnswer() {
    this.QuestionAsnwer = [
      {
        id: 123,
        id_user: 111,
        nombre: 'PREG FRECUENTES',
        precio: 1,
        stock: 2,
        preguntas: 'como hago apra comprar la mochila ?',
        respuesta:
          'accedes a la seccion de mochilas tomas su numero de bla bla bla...',
        disponible: false,
        input_true_false: true,
        img: [
          {
            nombre: '',
            url: '',
          },
        ],
      },
    ];
  }

  getListaCatalogo() {
    this.listCatalogo = [
        {
          id:1,
          name:"Slide",
          arrayImg:[
            {
              id_admin:1,
              img:'../../assets/imagenes/banner1.jpg'
            },  {
              id_admin:1,
              img:'../../assets/imagenes/banner2.jpg'
            }
            ,  {
              id_admin:1,
              img:'../../assets/imagenes/banner3.jpg'
            }
          ]
        },
        {
          id:2,
          name:"Novedades",

        }
     
    ];
  }

  getCategory(){
    this.listCategory =[
      {
        id_catalogo:1,
        id_user:123,
        name:"Madera",
        arrayProduct:[
          {
            id_admin:1,
           id_product:1,
           name:"Placard",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:2,
           name:"Mesa",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:3,
           name:"Tablas",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:4,
           name:"Skate",
           descripcion:"asda",
           disponible:false,
           img:{}
          }
        ]
      },
      {
        id_catalogo:2,
        id_user:123,
        name:"Plastico",
        arrayProduct:[
          {
            id_admin:1,
           id_product:1,
           name:"Tazas",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:2,
           name:"Juguetes",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:3,
           name:"Tazos",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:4,
           name:"Cajas",
           descripcion:"asda",
           disponible:false,
           img:{}
          }
        ]
      },
      {
        id_catalogo:3,
        id_user:123,
        name:"Textil",
        arrayProduct:[
          {
            id_admin:1,
           id_product:1,
           name:"telas",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:2,
           name:"Remeras",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:3,
           name:"Buzos",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:4,
           name:"Ropa",
           descripcion:"asda",
           disponible:false,
           img:{}
          }
        ]
      },
      {
        id_catalogo:4,
        id_user:123,
        name:"Cueros",
        arrayProduct:[
          {
            id_admin:1,
           id_product:1,
           name:"Botas",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:2,
           name:"Billeteras",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:3,
           name:"Camperas",
           descripcion:"asda",
           disponible:false,
           img:{}
          },
          {
            id_admin:1,
           id_product:4,
           name:"Cueros",
           descripcion:"asda",
           disponible:false,
           img:{}
          }
        ]
      }

    ]
  }

  getListNoticias() {
    this.NoticiasArray = [
      {
        id: 123,
        id_user: 111,
        title: 'aqui estan las noticias del momento',
        nombre:'noticia 1',
        descripcion: 'Una descripcion',
        disponible: true,
      },
      {
        id: 123,
        id_user: 111,
        title: 'aqui estan las noticias del momento',
        nombre:'noticia 2',
        descripcion: 'Una descripcion',
        disponible: true,
      },
      {
        id: 123,
        id_user: 111,
        title: 'aqui estan las noticias del momento',
        nombre:'noticia 3',
        descripcion: 'Una descripcion',
        disponible: true,
      },
      {
        id: 123,
        id_user: 111,
        title: 'aqui estan las noticias del momento',
        nombre:'noticia 4',
        descripcion: 'Una descripcion',
        disponible: true,
      },
    ];
  }

  getListaProductos() {
    this.listProducto = [
      {
        id: 123,
        id_user: 111,
        nombre: 'BARBIJOS Y KIT DE HIGIENE',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'TELAS SUBLIMABLES',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'BOLSOS Y MOCHILAS',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'BILLETERAS',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'CARPETAS PARA SUBLIMAR',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'CARTUCHERAS Y PORTA COSMETICOS',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'LIBRERiA',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'PAD MOUSE Y DERIVADOS',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'ACCESORIOS SUBLIMABLES PARA LA MODA',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'LLAVEROS Y ACCESORIOS PLASTICOS',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'FUNDAS PARA CELULAR',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'FUNDA DE TABLET Y NOTEBOOK',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'INSUMOS PARA SUBLIMACION',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'PRODUCTOS PARA IMPRESORAS INK JET',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'TAZAS CERAMICAS PARA SUBLIMAR',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'TAZAS PLASTICAS PARA SUBLIMAR',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'CARTON SUBLIMABLE',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'BOLSA DE FRISELINA',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'REMERAS PARA SUBLIMAR',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'PARCHES SUBLITEX PARA SUBLIMAR PRENDAS OSCURAS',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'GORRAS PARA SUBLIMAR',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'BEBE Y NIÑOS',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'MEDIAS Y ROPA INTERIOR',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'ALMOHADONES',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'CALZADO Y DEPORTES',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'MADERA SUBLIMABLE',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'MAQUINAS SUBLIMADORAS',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'IMPRESORAS Y PLOTTERS EPSON',
        precio: 1,
        stock: 2,
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url:
              'https://st4.depositphotos.com/12985790/20561/i/450/depositphotos_205610756-stock-photo-three-colored-schoolbags-wooden-cubes.jpg',
          },
        ],
        precioMinorista: '500$',
        precioMayorista: '300$',
      },
    ];
  }
}
