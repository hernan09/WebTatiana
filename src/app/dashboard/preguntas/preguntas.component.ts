import { Component, OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {
  @Input() idSection: any;
  @Input() data: any;
  dataForm={
    pregunta:'',
    respuesta:''
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getJson(){
    return this.http.get('').subscribe((resp:any)=>{
    
    })
   }
  SendInfoLogin(){
    console.log(this.dataForm)
  }

}
