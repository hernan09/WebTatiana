import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../../app/utils.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SimpleModalService } from "ngx-simple-modal";
import { PopupComponent  } from '../popup/popup.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
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

  getComprar(){
    console.log("estoy en compra GET");
    this.utilsService.getConfig(this.url+'compra')
      .subscribe((data) => {
        this.showLoading = false;
        console.log("data->",data);
        this.getArrayGet(data);
      });
  }


  getArrayGet(data){
    this.arrayCategoria =data.compra;
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

  postComprar(id){
    console.log("estoy en categorias POST");

    if (this.nameBtn != 'Editar'){
  
        console.log("estoy en compra POST");
    
        let obj = {
          id_admin:1,
          pregunta:this.nombre,
          respuesta: this.descripcion,
        }
    
        this.utilsService.postConfig(this.url+'compra',obj)
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
      this.putComprar()
    }
  }

  putComprar(){
    console.log("estoy en putComprar PUT");

    let obj = {
      id_admin: 1,
      pregunta: this.nombre,
      respuesta: this.descripcion,
    }

    let id = this.id;

    this.utilsService.putConfig(this.url+'compra/'+id,obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
          this.popupOk('Se actualizo con exito!');
          this.cleanForm();
        },
        err =>{
          console.log("ERROR",err);
        }

      );
  }


  deleteComprar(data){
    console.log("estoy en categorias DELETE",data);

    this.id =  data._id;
    this.namePopup = data.pregunta;

    this.showConfirm();
  }

  popupDelete(){
      this.utilsService.deleteConfig(this.url+'compra/'+this.id)
      .subscribe(
        (data) => {
          console.log("data->",data);
          this.getComprar();

        },
        err =>{
          console.log("ERROR",err);
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
