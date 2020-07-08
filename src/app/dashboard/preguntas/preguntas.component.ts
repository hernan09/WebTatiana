import { Component, OnInit,Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  SendInfoLogin(){
    console.log(this.dataForm)
  }

}
