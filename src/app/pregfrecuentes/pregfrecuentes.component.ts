import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../app/utils.service';
@Component({
  selector: 'app-pregfrecuentes',
  templateUrl: './pregfrecuentes.component.html',
  styleUrls: ['./pregfrecuentes.component.scss']
})
export class PregfrecuentesComponent implements OnInit {
  arrayPregRes=[];
  idSelected:any;
  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviceemds.herokuapp.com/';

  url:string=this.urlDev;
  constructor(private http:HttpClient, private utilsService:UtilsService) { }

  ngOnInit(): void {
    this.getPreFre();
  }

  //aca voy a pegarle al endpoint de emi
  getJson(){
    return this.http.get('this._jsonURL').subscribe((resp:any)=>{
    })
  }


  
  getPreFre(){
    console.log("estoy en prefre GET");
    this.utilsService.getConfig(this.url+'prefre')
      .subscribe((data) => {
        console.log("data->",data);
        this.getArray(data)
      });
  }

  getArray(data){
    this.arrayPregRes = data.preFre
  }

  setId(id){
    console.log("id=>",id);
    this.idSelected = id;

  }

}
