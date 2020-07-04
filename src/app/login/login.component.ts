import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showmodalbolean:boolean = false;
   data={
     name:'',
     pass:''
   }

  constructor() { }

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

}
