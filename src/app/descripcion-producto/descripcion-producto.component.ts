import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../app/utils.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-descripcion-producto',
  templateUrl: './descripcion-producto.component.html',
  styleUrls: ['./descripcion-producto.component.scss']
})
export class DescripcionProductoComponent implements OnInit {
  informacionProducto;
  imagePathshow:any;
  constructor(private router: Router,private route: ActivatedRoute, private utilsService:UtilsService,private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getDataDescripcion();
  }

  getDataDescripcion(){
    this.informacionProducto =this.utilsService.getSearchProducto();
    this.imagePathshow = this._sanitizer.bypassSecurityTrustResourceUrl('data:'+ this.informacionProducto.mimetype+';base64,' 
    + this.informacionProducto.base64);
    console.log("informacion ",this.informacionProducto);
    console.log("imagePathshow ",this.imagePathshow);
  }

}
//C:\Users\emili\AppData\Local\Android\Sdk