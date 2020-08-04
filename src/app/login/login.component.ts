import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showmodalbolean:boolean = false;
  section: String='inicio';

  user:string;
  pass:string;
   data={
     name:'',
     pass:''
   }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeboleanfunction(){
    this.showmodalbolean = !this.showmodalbolean;
  }

  closemodal(){
    console.log('modal cerrado')
    this.showmodalbolean = false
  }


  SendInfoLogin(){
   console.log(this.data)
   if(this.data.name !=='' || this.data.pass !== ''){
     console.log("podemos intentar loguearnos")
     if(this.data.name==='tatiana' && this.data.pass==='1234'){
       console.log('te as logeado correctamente Bienvenida tatiana')
         this.changeboleanfunction()
     }else{
       console.log('vola de aca intrusoo')
     }
   }
  }

  gotoPage(name:string){
    console.log("voy a catalogo!");
    this.section = name;
    
    if(this.user == 'delsublimado.mundo@gmail.com' && this.pass=="lanus2020") this.router.navigate([`${name}`]);
    else alert('Contraseña incorrecta')
  }

}
