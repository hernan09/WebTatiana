import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
arrayImages=[]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getImages()
    console.log(this.getImages())
  }

  gotoPage(name:string){
    console.log(`voy a  ${name}`);
    this.router.navigate([`${name}`]);
  }


  getImages(){
    this.arrayImages=[
      { id:"1",
        title:"Madera",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/madera.jpg"
      },
      { id:"2",
        title:"Vinilo",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/vinilo.png"
      },
      { id:"3",
        title:"Textil",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/textil.jpg"
      },
      { id:"4",
        title:"Hoja lata",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/lata.jpg"
      },
      { id:"5",
        title:"Cueros",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/cueros.jpg"
      },
      { id:"6",
        title:"Plasticos",
       descripcion:"Distintos elementos elaborados en madera apra sublimar",
       img:"../../assets/imagenes/plastico2.jpg"
      },
      
    ]
  }
}
