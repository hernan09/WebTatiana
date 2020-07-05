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
  }

  getListaCatalogo() {
    this.listCatalogo = [
      {
        id: 123,
        id_user: 111,
        nombre: 'SLIDE',
        precio: 1,
        stock: 2,
        title:'TITLE 1',
        descripcion: 'Una descripcion',
        disponible: true,
        img: [
          {
            nombre: '',
            url: '',
          },
        ],
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'MAS VENDIDOS',
        precio: 1,
        stock: 2,
        title:'TITLE 2',
        descripcion: 'Una descripcion',
        disponible: false,
        img: [
          {
            nombre: '',
            url: '',
          },
        ],
      },
      {
        id: 123,
        id_user: 111,
        nombre: 'PREG FRECUENTES',
        precio: 1,
        stock: 2,
        title:'TITLE 3',
        descripcion: 'Una descripcion',
        disponible: false,
        img: [
          {
            nombre: '',
            url: '',
          },
        ],
      },
    ];
  }
}
