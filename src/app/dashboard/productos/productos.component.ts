import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @Input() idSection: any;
  @Input() data: any;
   filereturn:any
   activeTab="home"
   dataSendPost={
    id_admin:1,
    name:"",
    descripcion:"",
    disponible:false,
    img:{}
  }
  constructor(private http:HttpClient) {
    
  }

  changeFile(e){
    this.dataSendPost.img =`assets/imagenes/${e.target.files[0].name}` 
  }

  deleteObject(item,index){
    console.log(item,'y el index seleccionado',index)
    this.data.forEach(element => {
      element.arrayProduct.forEach(element => {
        if(item == element){
          console.log('es este')  
          console.log( this.data[index-1].arrayProduct.slice())
        }   
           
      });
    });
   
    
  }

  search(activeTab){
    this.activeTab = activeTab;
  }
  result(activeTab){
    this.activeTab = activeTab;
  }
  changeFile2(e){
    this.dataSendPost.img =`assets/imagenes/${e.target.files[0].name}` 
  }

  passDataToTabs(item){
    console.log(item)
    this.dataSendPost.name = item.name
    this.dataSendPost.descripcion = item.descripcion
    this.dataSendPost.disponible = item.disponible
  }

  getJson(){
    return this.http.get('').subscribe((resp:any)=>{
    
    })
   }
   
   eliminarImg(){
    this.data[0].arrayImg.pop()
   }

  sendMesage(){
    console.log(this.dataSendPost)
    this.data[0].arrayImg.push(this.dataSendPost)
  }

  sendMesage2(id){
    this.data[id].arrayProduct.push(this.dataSendPost)
    console.log(this.dataSendPost)
    
  }

 

  ngOnInit(): void {
  }

}
