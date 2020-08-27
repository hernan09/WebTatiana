import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UtilsService } from '../../app/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  section: String='inicio' ;
  arrayImages2=[]
  searchSelect=""
  constructor(private router: Router,public utils:UtilsService) { }


  ngOnInit(): void {
    this.utils.setSelectMenu('inicio');

    this.getProducto();
    console.log("menu!");
  }

  getProducto(){
    this.utils.setSearchProducto(this.searchSelect);
  }

  gotoPage(name:string,searchSelect){
    console.log("voy a catalogo!",searchSelect);
    this.utils.setSelectMenu(name);
    this.utils.setSearchProducto(searchSelect);

    this.section = name;
    this.router.navigate([`${name}`]);
  }

}
