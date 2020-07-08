import { Component, OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  @Input() idSection: any;
  @Input() data: any;

  dataForm={
    title:'',
    descripcion:'',

  }
  constructor(private http:HttpClient) { }
  getJson(){
    return this.http.get('').subscribe((resp:any)=>{
    
    })
   }

  sendMesage(){
    console.log(this.dataForm)
  }
  ngOnInit(): void {
  }

}
