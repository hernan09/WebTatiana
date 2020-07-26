import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../app/utils.service';

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.scss']
})
export class DescripcionProductoComponent implements OnInit {
  informacionProducto: any;
  constructor(private router: Router,private route: ActivatedRoute, private utilsService:UtilsService) {

  }

  ngOnInit(): void {

    this.informacionProducto = this.utilsService.getSearchProducto();
    console.log("informacion ",this.informacionProducto);

  }

}
//C:\Users\emili\AppData\Local\Android\Sdk