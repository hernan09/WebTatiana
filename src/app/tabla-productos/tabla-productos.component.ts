import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { UtilsService } from '../../app/utils.service';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {
  @Input() idSection: any;
  @Input() productos: any;
  constructor(private router:Router, private utilsService:UtilsService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  detalle(data){
    this.utilsService.setData(data);
    this.router.navigate(['detalle'] );
  }

  gotoPage(name:string,data){
    console.log(`voy paraa ..${name}`,data);
    console.log(`data`,data);
    this.utilsService.setSelectMenu(name);
    this.utilsService.setSearchProducto(data);
    this.router.navigate([`${name}`]);
  }
  

}
