import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../../app/utils.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SimpleModalService } from "ngx-simple-modal";
import { PopupComponent  } from '../popup/popup.component';


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {
  arrayCategoria=[];
  nombre:string;
  descripcion:string;
  imagen:any
  disponible:boolean=false;
  activeTab = 'alta';
  showLoading:boolean=true;

  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviceemds.herokuapp.com/';

  url:string=this.urlProd;

  nameBtn:string='Guardar';

  id:string;
  namePopup:string;
  constructor(private http:HttpClient, private utilsService:UtilsService,private simpleModalService:SimpleModalService) { }

  ngOnInit(): void { }

  getPreFre(){
    console.log("estoy en prefre GET");
    this.utilsService.getConfig(this.url+'prefre')
      .subscribe((data) => {
        this.showLoading = false;
        console.log("data->",data);
        this.getArrayGet(data);
      });
  }

  getArrayGet(data){
    this.arrayCategoria =data.preFre;
  }

  editar(data,section) {
    console.log("EDITANDO",data);
    this.nameBtn='Editar';
    this.activeTab = section;

    this.nombre = data.pregunta;
    this.descripcion = data.respuesta;
    this.id = data._id;
  }

  result(section){
    this.nameBtn='Guardar';
    this.activeTab = section;
  }

  postPreFre(id){
    console.log("estoy en prefre POST");

    if (this.nameBtn != 'Editar'){
       let obj = {
        id_admin:1,
        pregunta: this.nombre,
        respuesta: this.descripcion,
      }
  
      this.utilsService.postConfig(this.url+'prefre',obj)
        .subscribe(
          (data) => {
            console.log("data->",data);
            this.popupOk('Se guardo con exito!');
            id.reset();
          },
          err =>{
            console.log("ERROR",err);
          }
        );
    }else {
      this.putPreFre();
    }
  }

  putPreFre(){
    console.log("estoy en prefre PUT");
  
    let obj = {
      id_admin: 1,
      pregunta: this.nombre ,
      respuesta: this.descripcion,
    }

    let id =this.id;

    this.utilsService.putConfig(this.url+'prefre/'+id,obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
          this.nameBtn='Guardar';
          this.popupOk('Se actualizo con exito!')
        },
        err =>{
          console.log("ERROR",err);
          alert(err);
        }

      );
  }

  deletePreFre(data){
    console.log("estoy en prefre DELETE");
    
    this.id =  data._id;
    this.namePopup = data.pregunta;

    this.showConfirm();
  } 

  popupDelete(){
    
    this.utilsService.deleteConfig(this.url+'prefre/'+this.id)
      .subscribe(
        (data) => {
          console.log("data->",data);
          this.getPreFre();
        },
        err =>{
          console.log("ERROR",err);
          alert(err);

        }

      );
  }

  showConfirm() {
    let disposable = this.simpleModalService.addModal(PopupComponent, {
          title: 'Eliminar',
          message: `¿Desea eliminar ${this.namePopup}?`
        })
        .subscribe((isConfirmed)=>{
            //We get modal result
            if(isConfirmed) {
              this.popupDelete();
            }
            else {
                //alert('declined');
            }
        });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
    setTimeout(()=>{
        //disposable.unsubscribe();
    },10000);
  }

  popupOk(message){
    let disposable = this.simpleModalService.addModal(PopupComponent, {
      title: 'ok',
      message: message
    })
    .subscribe((isConfirmed)=>{
        //We get modal result
        if(isConfirmed) {
        }
        else {
            //alert('declined');
        }
    });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
    setTimeout(()=>{
        //disposable.unsubscribe();
    },10000);
  }

  cleanForm(){
    this.nombre ='';
    this.descripcion='';
  }





}
