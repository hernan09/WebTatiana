import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  section: String='inicio';
  arrayImages2=[]
  searchSelect=""
  constructor(private router: Router) { }

  gotoPage(name:string){
    console.log("voy a catalogo!");
    this.section = name;
    this.router.navigate([`${name}`]);
  }



 
  ngOnInit(): void {
    this.getImages()
  }

  getImages(){
    this.arrayImages2=[
      { id:1,
       title:"madera",
       descripcion:"Distintos elementos elaborados en madera apra sublimar"
      
      },
      { id:2,
        title:"vinilo",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       
      },
      { id:3,
        title:"textil",
       descripcion:"Distintos elementos elaborados en madera apra sublimar"
       
      },
      { id:4,
        title:"hoja lata",
       descripcion:"Distintos elementos elaborados en madera apra sublimar"
      
      },
      { id:5,
        title:"cueros",
       descripcion:"Distintos elementos elaborados en madera apra sublimar"
      
      },
      { id:6,
        title:"plasticos",
       descripcion:"Distintos elementos elaborados en madera apra sublimar"
      
      }
      
    ]
  }
}
