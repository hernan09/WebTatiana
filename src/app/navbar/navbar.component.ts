import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  section: String;
  constructor(private router: Router) { }

  gotoPage(name:string){
    console.log("voy a catalogo!");
    this.section = name;
    this.router.navigate([`${name}`]);
  }

 
  ngOnInit(): void {
  }

}
