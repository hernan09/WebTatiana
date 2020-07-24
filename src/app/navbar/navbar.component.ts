import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UtilsService } from '../../app/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  section: String='inicio';
  arrayImages2=[]
  searchSelect=""
  constructor(private router: Router,private utils:UtilsService) { }


  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(){
    this.utils.setSearchProducto(this.searchSelect);
  }

  gotoPage(name:string,searchSelect){
    console.log("voy a catalogo!",searchSelect);
    this.utils.setSearchProducto(searchSelect);

    this.section = name;
    this.router.navigate([`${name}`]);
  }

}
