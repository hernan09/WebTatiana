import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../app/utils.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  arrayPregRes=[];
  idSelected:any;
  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviceemds.herokuapp.com/';

  url:string=this.urlProd;
  constructor(private http:HttpClient, private utilsService:UtilsService) { }

   //aca voy a pegarle al endpoint de emi
   getJson(){
    return this.http.get('this._jsonURL').subscribe((resp:any)=>{
    })
   }


   ngOnInit(): void {
    this.utilsService.setSelectMenu('comprar');

    this.getPreFre();
  }
 
  getPreFre(){
    console.log("estoy en prefre GET");
    this.utilsService.getConfig(this.url+'compra')
      .subscribe((data) => {
        console.log("data->",data);
        this.getArray(data)
      });
  }

  getArray(data){
    this.arrayPregRes = data.compra;
  }

  setId(id){
    console.log("id=>",id);
    this.idSelected = id;

  }

}
