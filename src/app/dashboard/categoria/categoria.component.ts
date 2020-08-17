import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../../app/utils.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SimpleModalService } from "ngx-simple-modal";
import { PopupComponent  } from '../popup/popup.component';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})

export class CategoriaComponent implements OnInit {
  arrayCategoria=[];
  nombre:string;
  descripcion:string;

  categoriaImg:any
  categoriaImg2:any

  disponible:boolean=false;
  activeTab = 'alta';
  showLoading:boolean=true;

  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviceemds.herokuapp.com/';

  url:string=this.urlProd;

  nameBtn:string='Guardar';

  id:string;
  namePopup:string;

  imgURLPreview: any; 
  imgURLPreview2: any; 
  imagePath;
  imagePath2:any;

  allDataPut:any;
  img:string;
  putImage:boolean=false;
  btnImagen:string="Subir Imagen";

  nombreCategoria:string;
  descripcionCategoria:string;
  formDatCategoria = new FormData();
  formDatCategoria2 = new FormData();

  constructor(private http:HttpClient, private utilsService:UtilsService,private simpleModalService:SimpleModalService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void { }


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
    this.arrayCategoria = data.categoria;
  }

  editar(data,section) {
    this.putImage =true;
    this.btnImagen ='Reemplazar imagen'
    console.log("EDITANDO",data);
    this.nameBtn='Editar';
    this.activeTab = section;
    this.allDataPut = data;
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    this.img = data.img;
    this.disponible = data.disponible;
    this.id = data._id;
    this.nombreCategoria = data.nombre;
    this.descripcionCategoria =data.descripcion;
  }

  eliminar(data){
    console.log("Eliminando",data);
  }

  result(section){
    this.nameBtn='Guardar';
    this.activeTab = section;
  }

  cargarImgCategoria(files: FileList){
    this.putImage = false;
    console.log("IMAGEN categoria",files);

    this.categoriaImg = files.item(0);;

    console.log("IMAGEN categoria",this.categoriaImg);


    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURLPreview = reader.result; 
    }

  }

  onFileChanges(dataImage) {
    console.log('data imagen base64',dataImage);
    this.categoriaImg = dataImage[0];
  }

  postCategoria(id){
    this.btnImagen="Subir Imagen"
    console.log("estoy en categorias POST",this.categoriaImg);

    if (this.nameBtn != 'Editar'){


      let nombreImagenSet = new Date().getMilliseconds().toString();
      
      this.formDatCategoria.append('nombre',this.nombre);
      this.formDatCategoria.append('descripcion',this.descripcion);
      this.formDatCategoria.append('nombreImg',nombreImagenSet+this.categoriaImg.name || null);
      this.formDatCategoria.append('upload',this.categoriaImg);
      this.formDatCategoria.append('section','categoria');

      console.log("formDatCategoria",this.formDatCategoria);

      let objCategoria = {
        nombre:this.nombre,
        descripcion:this.descripcion,
        nombreImg:this.categoriaImg.name,
        upload:this.categoriaImg.base64
      }

      this.utilsService.postConfig(this.url+'categoria',this.formDatCategoria) 
        .subscribe( 
          (data) => {

            console.log("data->",data);
            this.popupOk('La categoria se guardo correctamente!')
            
            //this.saveImg(formDatCategoria)

            id.reset();
            this.imgURLPreview = undefined;
          },
          err =>{
            console.log("ERROR",err);
          }

        );
    }else {
      this.putCategoria()
    }

  }

  saveImg(data){
    console.log("se guardo imagen!");
    this.utilsService.postConfig(this.url+'slide',data) 
    .subscribe( 
      (data) => {
        console.log("data->",data);
        this.popupOk('La categoria se guardo correctamente!')
      },
      err =>{
        console.log("ERROR",err);
      }

    );
  }

  putCategoria(){
    console.log("estoy en categorias editar");
    let putFormDataCategoria = new FormData();
    let nombreImagenSet = new Date().getMilliseconds().toString();
    console.log("nombre de la categoria",this.nombre);
    putFormDataCategoria.append('nombre',this.nombre)
    putFormDataCategoria.append('descripcion',this.descripcion);
    putFormDataCategoria.append('upload',this.categoriaImg);
    putFormDataCategoria.append('section','categoria');

    let id = this.id;
    console.log(!this.putImage);
    if(!this.putImage){
      console.log("Entro en 1");
      putFormDataCategoria.append('eliminar','true');
      putFormDataCategoria.append('nombreImg',nombreImagenSet+this.categoriaImg.name);
      putFormDataCategoria.append('oldnombreImagen',this.img);
      //this.saveImg(putFormDataCategoria);
    }else{
      console.log("Entro en 2");
      putFormDataCategoria.append('eliminar','false');
      putFormDataCategoria.append('nombreImg',this.img);
      putFormDataCategoria.append('oldnombreImagen','');

    }

    console.log('=>',putFormDataCategoria)

    this.utilsService.putConfig(this.url+'categoria/'+id,putFormDataCategoria)
      .subscribe(
        (data) => {
          console.log("data->",data);
          this.popupOk('El producto se actualizo correctamente!')

        },
        err =>{
          console.log("ERROR",err);
        }

      );
  }


  deleteCategoria(data){
    console.log("estoy en categorias DELETE",data);

    this.id =  data._id;
    this.namePopup = data.nombre;

    this.showConfirm();
  }

  popupDelete(){
    
    this.utilsService.deleteConfig(this.url+'categoria/'+this.id)
      .subscribe(
        (data) => {
          console.log("data->",data);
          this.getCategorias()
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

}
