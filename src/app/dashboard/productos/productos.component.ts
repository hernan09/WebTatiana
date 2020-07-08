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
  dataForm={
    file:{},
    title:'',
    descripcion:'',
    preciomenor:'',
    preciomayor:''

  }
  constructor(private http:HttpClient) {
    
  }
  changeFile(e){
   this.dataForm.file= e.target.files[0]
     
  }

  getJson(){
    return this.http.get('').subscribe((resp:any)=>{
    
    })
   }

  sendMesage(){
    console.log(this.dataForm)
  }

  ngOnInit(): void {
  }

}
