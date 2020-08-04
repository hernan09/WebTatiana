import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../../app/utils.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SimpleModalService } from "ngx-simple-modal";
import { PopupComponent  } from '../popup/popup.component';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  arrayCategoria=[];
  arrayProducto=[];
  nombre:string;
  descripcion:string;
  subTitulo:string;
  detalle:string;
  imagen:File = null;
  disponible:boolean=false;
  activeTab = 'alta';
  showLoading:boolean=true;
  idCategoria:any;
  imgURLPreview: any; 
  public imagePath;

  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviceemds.herokuapp.com/';
  url:string=this.urlProd;

  nameBtn:string='Guardar';

  img:string;
  putImage:boolean=false;
  btnImagen:string="Subir Imagen"
  
  id:string;
  namePopup:string;
  categoria2:string='asdasd';
  constructor(private http:HttpClient, private utilsService:UtilsService,private simpleModalService:SimpleModalService) {
   }

  ngOnInit() {
    this.getCategorias();
  }

  recarga(){
    this.getCategorias();
  }

  getCategorias(){
    console.log("estoy en categorias GET");//_id que te genera mongo

    this.utilsService.getConfig(this.url+'categoria')
      .subscribe((data) => {
        this.showLoading = false;
        console.log("data->",data);
        this.getArrayGet(data);
      });
  }

  getArrayGet(data){
    this.arrayCategoria =data.categoria;
    console.log("idCategoria",this.arrayCategoria);

    this.idCategoria = this.arrayCategoria[0]._id;
  }

  getSelectAddId(id){
    this.idCategoria= id.value;
  }
 
  getArrayProducto(data){
    this.arrayProducto =data.producto;
  }

  getProducto(data){
    this.showLoading =true;

    console.log("estoy en producto GET",data.value);
    let id = data.value || this.arrayCategoria[0]._id;
    this.utilsService.getConfig(this.url+'producto/'+id)
      .subscribe((data) => {
        console.log("data->",data);
        this.showLoading =false;
        this.getArrayProducto(data);

      });
  }

  editar(data,section) {
    this.putImage=true;
    this.btnImagen='Remplazar Imagen';
    console.log("EDITANDO",data);
    this.nameBtn='Editar';
    this.activeTab = section;

    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    this.subTitulo = data.subTitulo;
    this.detalle = data.detalle;
    this.img = data.img;
    this.id = data._id;

    this.idCategoria = data.id_catalogo;
  }

  result(section){
    console.log("section",section)
    this.nameBtn='Guardar';
    this.activeTab = section;
    this.getProducto({value:undefined});
  }

  cargarImgProducto(files: FileList){
    this.putImage =false;
    console.log("IMAGEN",files);

    this.imagen = files.item(0);;

    console.log("IMAGEN",this.imagen);


    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURLPreview = reader.result; 
    }

  }
 
  postProducto(id) {
    this.showLoading =true;

    if (this.nameBtn != 'Editar'){
      console.log("estoy en producto POST",this.imagen);

      let formData = new FormData();
      let nombreImagenSet = new Date().getMilliseconds().toString();

      formData.append('upload',this.imagen);
      formData.append('id_catalogo',this.idCategoria);
      formData.append('nombre',this.nombre)
      formData.append('descripcion',this.descripcion);
      formData.append('subTitulo',this.subTitulo);
      formData.append('detalle',this.detalle);
      formData.append('section','producto');
      formData.append('nombreImg',nombreImagenSet+this.imagen.name);

      console.log("formData",formData);

  
      this.utilsService.postConfig(this.url+'producto',formData)
        .subscribe(
          (data) => {
            console.log("data->",data);
            this.saveImg(formData);
          },
          err =>{
            console.log("ERROR",err);
            alert(err);
          }
  
        );
    }else {
      this.putProducto();
    }
  }

  saveImg(data){
    console.log("se guardo imagen!");
    this.utilsService.postConfig(this.url+'slide',data) 
    .subscribe( 
      (data) => {
        console.log("data->",data);
        this.showLoading =false;
        this.cleanForm();
        this.popupOk('La producto se guardo correctamente!')
      },
      err =>{
        this.showLoading =false;
        console.log("ERROR",err);
        alert('Intente nuevamente y verifique que todos los campos esten correctos')
      }

    );
  }

  putProducto(){
      this.showLoading =true;
      this.btnImagen="Subir Imagen";
      console.log("estoy en producto PUT",this.idCategoria);

      let putFormData = new FormData();
      let nombreImagenSet = new Date().getMilliseconds().toString();

      putFormData.append('upload',this.imagen);
      putFormData.append('id_catalogo',this.idCategoria);
      putFormData.append('nombre',this.nombre)
      putFormData.append('descripcion',this.descripcion);
      putFormData.append('subTitulo',this.subTitulo);
      putFormData.append('detalle',this.detalle);
      putFormData.append('section','producto');
  
      if(!this.putImage){
        console.log("Entro en 1");
        putFormData.append('eliminar','true');
        putFormData.append('nombreImg',nombreImagenSet+this.imagen.name);
        putFormData.append('oldnombreImagen',this.img);
        this.saveImg(putFormData);
      }else{
        console.log("Entro en 2");
        putFormData.append('eliminar','false');
        putFormData.append('nombreImg',this.img);
        putFormData.append('oldnombreImagen','');

      }

      let id = this.id;
  
      this.utilsService.putConfig(this.url+'producto/'+id,putFormData)
        .subscribe(
          (data) => {
            console.log("data->",data);

            this.showLoading =false;
            this.cleanForm();
            this.popupOk('El producto se actualizo correctamente!')
          },
          err =>{
            this.showLoading =false;
            console.log("ERROR",err);
            alert('Intente Nuevamente y verifique que todos los campos esten correctos');
          }
  
        );
  }


 


  deleteProducto(data){

    console.log("estoy en producto DELETE",data);

    this.id =  data._id;
    this.namePopup = data.nombre;

    this.showConfirm();
  }

  popupDelete(){
    this.showLoading =true;
    
    this.utilsService.deleteConfig(this.url+'producto/'+this.id)
    .subscribe(
      (data) => {
        console.log("data->",data);
        this.getProducto(this.idCategoria)
        this.showLoading =false;

      },
      err =>{
        this.showLoading =false;
        console.log("ERROR",err);
        alert('Intente nuevamente')
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
    this.imgURLPreview=undefined;
    this.subTitulo = '';
    this.detalle = '';
  }

}
