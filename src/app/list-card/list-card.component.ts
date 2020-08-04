import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router'; 
import { UtilsService } from '../../app/utils.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})

export class ListCardComponent implements OnInit {
  listProducto= [];
  busqueda:string;
  showLoading:boolean=true;
  public Users :any
  private _jsonURL = 'assets/mock.json';

  urlDev:string='http://localhost:3000/';  
  urlProd:string='https://serviceemds.herokuapp.com/';

  url:string=this.urlDev;

  constructor(private http:HttpClient, private router: Router,private utils:UtilsService,private activatedRoute: ActivatedRoute) { 
    console.log("ENTRO2");
  }

  ngOnInit(): void {
    console.log("ENTRO1");
    this.activatedRoute.queryParams.subscribe(params => {
      const userId = params;
      console.log('=>',userId);
      this.search();

    });
  }

  gotoPage(name:string){
    console.log(`voy paraa ..${name}`);
    this.router.navigate([`${name}`]);
  }
  
  search(){
    this.showLoading=true;
    console.log("estoy en search GET",this.utils.getSearchProducto());
    let nombre= this.busqueda || this.utils.getSearchProducto() ||  'a';
    this.utils.getConfig(this.url+'buscar/'+nombre)
      .subscribe((data) => {
        console.log("data->",data);
        this.showLoading=false;
        this.arrrayProducto(data)
      });
  }

  search2(){
    this.showLoading=true;
    console.log("estoy en search GET",this.utils.getSearchProducto());
    let nombre= this.busqueda  ||  'a';
    this.utils.getConfig(this.url+'buscar/'+nombre)
      .subscribe((data) => {
        this.showLoading=false;
        console.log("data->",data);
        this.arrrayProducto(data)
      });
  }

  arrrayProducto(data){
      this.listProducto = data.productos;
  }


}
