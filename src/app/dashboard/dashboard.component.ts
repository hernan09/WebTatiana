import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  toggle: boolean = false;
  listCatalogo = [];
  listIterator = []
  listProducto = [];
  QuestionAsnwer = [];
  NoticiasArray = [];
  listCategory=[];
  indiceSeleccionado: number;

  constructor(private http:HttpClient,private animateScrollService: NgAnimateScrollService) {}

  productoSeleccionado(producto, indice) {
    console.log('producto', producto);
    console.log('indice', indice);
    this.indiceSeleccionado = indice;
    this.navigateToHeader(indice);
  }

  navigateToHeader(id) {
    this.animateScrollService.scrollToElement(id.toString(), 500);
  }

  ngOnInit(): void {  }



}
