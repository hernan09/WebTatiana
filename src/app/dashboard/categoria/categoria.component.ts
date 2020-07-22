import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UtilsService } from '../../../app/utils.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SimpleModalService } from "ngx-simple-modal";
import { PopupComponent  } from '../popup/popup.component';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  arrayCategoria=[];
  nombre:string;
  descripcion:string;
  imagen:any
  disponible:boolean=false;
  activeTab = 'alta';
  showLoading:boolean=true;

  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviciosmundosublimado.herokuapp.com/';

  url:string=this.urlDev;

  nameBtn:string='Guardar';

  id:string;
  namePopup:string;
  constructor(private http:HttpClient, private utilsService:UtilsService,private simpleModalService:SimpleModalService) { }

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
    this.arrayCategoria =data.categoria;
  }

  editar(data,section) {
    console.log("EDITANDO",data);
    this.nameBtn='Editar';
    this.activeTab = section;

    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    //this.imagen = 'asd';
    this.disponible = data.disponible;
    this.id = data._id;
  }

  eliminar(data){
    console.log("Eliminando",data);
  }

  result(section){
    this.nameBtn='Guardar';
    this.activeTab = section;
  }

  postCategoria(id){
    console.log("estoy en categorias POST");

    if (this.nameBtn != 'Editar'){
      let obj = {
        id_admin:1,
        nombre: this.nombre,
        descripcion: this.descripcion, 
        disponible: this.disponible,
        stock: 0,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/16_wood_samples.jpg'
    }

    this.utilsService.postConfig(this.url+'categoria',obj) 
      .subscribe( 
        (data) => {
          console.log("data->",data);

          id.reset();
        },
        err =>{
          console.log("ERROR",err);
        }

      );
    }else {
      this.putCategoria()
    }



  }

  putCategoria(){
    console.log("estoy en categorias editar");

    let obj = {
        id_admin:1,
        nombre: this.nombre,
        descripcion: this.descripcion, 
        disponible: this.disponible,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/16_wood_samples.jpg'
    }

    let id = this.id;

    this.utilsService.putConfig(this.url+'categoria/'+id,obj)
      .subscribe(
        (data) => {
          console.log("data->",data);
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
}
