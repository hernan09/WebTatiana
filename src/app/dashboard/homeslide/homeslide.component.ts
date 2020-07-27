import { Component, OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../../app/utils.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SimpleModalService } from "ngx-simple-modal";
import { PopupComponent  } from '../popup/popup.component';

@Component({
  selector: 'app-homeslide',
  templateUrl: './homeslide.component.html',
  styleUrls: ['./homeslide.component.scss']
})

export class HomeslideComponent implements OnInit {
  arrayImage=[];
  fileToUpload: File = null;
  showLoading:boolean=true;
  disponible=false;
  arrayCategoria=[];
  arrayProducto=[];
  idCategoria:any;
  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviciosmundosublimado.herokuapp.com/';
  pdf:string;
  url:string=this.urlDev;

  imagenSlide:any;
  
  imgURLPreview: any; 
  public imagePath;
  arraySlideimg =[];
  constructor(private http:HttpClient, private utilsService:UtilsService,private simpleModalService:SimpleModalService) { }
  
  ngOnInit(): void {
    this.getCategorias();
    this.getSlide();
    
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

    //this.getProducto(this.idCategoria);
  }

  getSelectAddId(id){
    this.idCategoria= id.value;
  }
 
  getArrayProducto(data){
    this.arrayProducto = data.producto;
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


  actualizarNovedates(){
    const resultado = this.arrayProducto.find( producto => producto.disponible === true );
    let arrayIdDisponible= [];
    let arrayIdNoDisponible= [];

    for (let index = 0; index < this.arrayProducto.length; index++) {
      if(this.arrayProducto[index].disponible === true) arrayIdDisponible.push(this.arrayProducto[index]._id);
      else arrayIdNoDisponible.push(this.arrayProducto[index]._id);
    }

    let obj = {
        idtrue:arrayIdDisponible,
        idfalse:arrayIdNoDisponible
    }

    this.utilsService.putConfig(this.url+'novedades',obj)
      .subscribe(
        (data) => {
          this.getProducto(this.idCategoria);
          this.popupOk('El producto se actualizo correctamente!')
        },
        err =>{
          alert(err);
        }

      );
  }


  getSlide(){
    console.log("estoy en categorias GET");//_id que te genera mongo

    this.utilsService.getConfig(this.url+'slide')
      .subscribe((data) => {
        this.showLoading = false;
        console.log("data->",data);
        this.getArraySlide(data);
      });
  }

  getArraySlide(data){
    this.arrayImage =data.slide;
  }

  cargarImgSlide(files: FileList){
    console.log("IMAGEN slide",files);

    this.imagenSlide = files.item(0);;

    console.log("IMAGEN silde",this.imagenSlide);

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURLPreview = reader.result; 
    }

  }
  
  upImage(slide){
    console.log("estoy en slide POST",this.imagenSlide);

    let formDataSlide = new FormData();

    formDataSlide.append('upload',this.imagenSlide);
    formDataSlide.append('section','slide');
    formDataSlide.append('removeImg',slide);

    this.utilsService.postConfig(this.url+'slide',formDataSlide)
      .subscribe(
        (data) => {
          console.log("data->",data);
          this.imgURLPreview=undefined;
          this.getSlide()
          this.popupOk('La Imagen se guardo correctamente!');
        },
        err =>{
          console.log("ERROR",err);
          alert(err);
        }

      );
  }

  guardarPDF() {
    let formDataSlide = new FormData();

    formDataSlide.append('pdf', this.pdf);

    this.utilsService.postConfig(this.url+'pdf',formDataSlide)
      .subscribe(
        (data) => {
          console.log("data->",data);
          this.popupOk('El PDF se guardo correctamente!');
        },
        err =>{
          console.log("ERROR",err);
          alert(err);
        }

      );
  }

  handleFileInput(files: FileList) {
    console.log("FILE",files)
    this.fileToUpload = files.item(0);
  }

  popupDelete(data){
    console.log('id',data._id);
    //this.showLoading =true;

    let formDataSlideremove = new FormData();

    formDataSlideremove.append('section','slide');
    formDataSlideremove.append('nombre',data.img);

    let obj = {
      section:'slide',
      nombre:data.img
    }
    
    this.utilsService.postConfig(this.url+'slide/'+data._id,obj)
    .subscribe(
      (data) => {
        console.log("data->",data);
        //this.getProducto(this.idCategoria)
        this.getSlide();
        //this.showLoading =false;

      },
      err =>{
        this.showLoading =false;
        console.log("ERROR",err);
        alert('Intente nuevamente')
      }

    );
  }

  showConfirm(data) {
    let disposable = this.simpleModalService.addModal(PopupComponent, {
          title: 'Eliminar',
          message: `¿Desea eliminar esta Imagen?`
        })
        .subscribe((isConfirmed)=>{
            //We get modal result
            if(isConfirmed) {
              this.popupDelete(data);
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
