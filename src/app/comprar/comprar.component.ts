import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

   //aca voy a pegarle al endpoint de emi
   getJson(){
    return this.http.get('this._jsonURL').subscribe((resp:any)=>{
    })
   }

}
