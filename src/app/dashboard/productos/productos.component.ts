import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @Input() idSection: any;
  @Input() data: any;

  dataForm={
    title:'',
    descripcion:'',
    preciomenor:'',
    preciomayor:''

  }
  constructor() {
    
  }

  sendMesage(){
    console.log(this.dataForm)
  }

  ngOnInit(): void {
  }

}
