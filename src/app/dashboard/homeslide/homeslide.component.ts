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
    id_admin: 1,
    img:{},
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.data[0].arrayImg)
  }
  changeFile(e){
    this.dataForm.img = e.target.files[0].name
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

}
