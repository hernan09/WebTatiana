import { Component, OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-homeslide',
  templateUrl: './homeslide.component.html',
  styleUrls: ['./homeslide.component.scss']
})
export class HomeslideComponent implements OnInit {
  @Input() idSection: any;
  @Input() data: any;
  @Input() catalogo:any;
  arrayReturn=[]
  dataForm={
    id_admin: 1,
    img:{},
  }
  
  dataSendPost={
    id_admin:1,
    name:"",
    descripcion:"",
    disponible:false,
    img:{}
  }
  constructor(private http:HttpClient) {
   
   }

  ngOnInit(): void {
    console.log(this.data[0].arrayImg)
    console.log(this.catalogo)
  }
  changeFile(e){
    this.dataForm.img =`assets/imagenes/${e.target.files[0].name}` 
  }

  deleteObject(item,index){
    console.log(item,'y el index seleccionado',index)
    this.catalogo.forEach(element => {
      element.arrayProduct.forEach(element => {
        if(item == element){
          console.log('es este')  
          console.log( this.catalogo[index-1].arrayProduct.slice())
        }   
           
      });
    });
   
    
  }
  changeFile2(e){
    this.dataSendPost.img =`assets/imagenes/${e.target.files[0].name}` 
  }



  getJson(){
    return this.http.get('').subscribe((resp:any)=>{
    
    })
   }
   
   eliminarImg(){
    this.data[0].arrayImg.pop()
   }

  sendMesage(){
    console.log(this.dataForm)
    this.data[0].arrayImg.push(this.dataForm)
  }

  sendMesage2(id){
    this.catalogo[id].arrayProduct.push(this.dataSendPost)
    console.log(this.dataSendPost)
    
  }

}
