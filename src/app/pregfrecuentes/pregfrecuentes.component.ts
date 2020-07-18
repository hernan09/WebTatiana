import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pregfrecuentes',
  templateUrl: './pregfrecuentes.component.html',
  styleUrls: ['./pregfrecuentes.component.scss']
})
export class PregfrecuentesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
    //aca voy a pegarle al endpoint de emi
    getJson(){
      return this.http.get('this._jsonURL').subscribe((resp:any)=>{
      })
     }

}
