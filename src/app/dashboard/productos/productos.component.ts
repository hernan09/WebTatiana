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
  imagen:File = null;
  disponible:boolean=false;
  activeTab = 'alta';
  showLoading:boolean=true;
  idCategoria:any;

  imgURLPreview: any; 
  public imagePath;

  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviciosmundosublimado.herokuapp.com/';
  url:string=this.urlDev;

  nameBtn:string='Guardar';

  id:string;
  namePopup:string;
  categoria2:string='asdasd';
  constructor(private http:HttpClient, private utilsService:UtilsService,private simpleModalService:SimpleModalService) {
   }

  ngOnInit() {
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
    console.log("estoy en producto GET",data.value);
    let id = data.value || this.arrayCategoria[0]._id;
    this.utilsService.getConfig(this.url+'producto/'+id)
      .subscribe((data) => {
        console.log("data->",data);
        this.getArrayProducto(data);

      });
  }

  editar(data,section) {
    console.log("EDITANDO",data);
    this.nameBtn='Editar';
    this.activeTab = section;

    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    //this.imagen = 'asd';
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
    if (this.nameBtn != 'Editar'){
      console.log("estoy en producto POST",this.imagen);

      let formData = new FormData();

      formData.append('upload',this.imagen);
      formData.append('id_catalogo',this.idCategoria);
      formData.append('nombre',this.nombre)
      formData.append('descripcion',this.descripcion);

      console.log("formData",formData);

  
      this.utilsService.postConfig(this.url+'producto',formData)
        .subscribe(
          (data) => {
            console.log("data->",data);
            this.cleanForm();
            this.popupOk('El producto se guardo correctamente!')

          },
          err =>{
            console.log("ERROR",err);
            alert(err);
          }
  
        );
    }else {
      this.putProducto()
    }
  }

  putProducto(){
      console.log("estoy en producto PUT",this.idCategoria);

      let obj = {
          id_admin:1,
          id_catalogo:this.idCategoria,
          nombre: this.nombre,
          descripcion: this.descripcion,
          disponible: false,
          stock: 0,
          img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/16_wood_samples.jpg'
      }
  
      let id = this.id;
  
      this.utilsService.putConfig(this.url+'producto/'+id,obj)
        .subscribe(
          (data) => {
            console.log("data->",data);
            this.cleanForm();
            this.popupOk('El producto se actualizo correctamente!')
          },
          err =>{
            console.log("ERROR",err);
            alert(err);
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
    
    this.utilsService.deleteConfig(this.url+'producto/'+this.id)
    .subscribe(
      (data) => {
        console.log("data->",data);
        this.getProducto(this.idCategoria)
      },
      err =>{
        console.log("ERROR",err);
        alert(err)
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
  }

}
