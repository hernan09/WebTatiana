import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggle: boolean = false;
  listCatalogo = [];
  constructor() {}

  toggleMenu(toggle) {
    console.log('toggle menu');

    if (toggle) this.toggle = false;
    else this.toggle = true;
  }

  ngOnInit(): void {}

  getListaCatalogo() {
    this.listCatalogo = [
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
            url: '',
          },
        ],
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
            url: '',
          },
        ],
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
            url: '',
          },
        ],
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
            url: '',
          },
        ],
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
            url: '',
          },
        ],
      },
    ];
  }
}
