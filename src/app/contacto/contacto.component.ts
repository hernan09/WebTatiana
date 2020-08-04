import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
 nombre:any
 tell:any
 email:any
 texto:any;
 showLoading:boolean=false;
 showLoadingm:boolean=false;
 message:String;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.showLoading=false;
    this.showLoadingm=false;
  }

  sendMessage(body) {
    this.showLoading =true;
    console.log("envia emial")
    return this.http.post("https://elmundodelsublimado.herokuapp.com/mailer", body).subscribe(data =>{
      console.log('salio la data', data)
      this.showLoading=false;
      this.showLoadingm=true;
      this.getMessage(data);
    });
   
    }

  getMessage(data){
    this.message = data.message;
  }


    contactForm(e){
      let objSendEmail={
        name:this.nombre,
        tell:this.tell,
        email:this.email,
        text:this.texto
      }
      
      this.sendMessage(objSendEmail)
      
    }

}
