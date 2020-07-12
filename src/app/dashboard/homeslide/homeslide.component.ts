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
  dataForm={
    file:{},
    title:'',
    descripcion:'',

  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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

}
