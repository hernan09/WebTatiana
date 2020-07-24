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
 texto:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  sendMessage(body) {
    return this.http.post("http://localhost:4000/mailer", body).subscribe(data =>{
      console.log('salio la data', data)
    });
   
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
