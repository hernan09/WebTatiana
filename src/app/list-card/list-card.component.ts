import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
 
  public Users :any
  private _jsonURL = 'assets/mock.json';
  constructor(private http:HttpClient, private router: Router) { 
    this.getJson()
  }

  getJson(){
   return this.http.get(this._jsonURL).subscribe((resp:any)=>{
     this.Users = resp.listCard

     console.log(this.Users)
   })
  }

  ngOnInit(): void {
   
  }

  gotoPage(){
    console.log("voy a catalogo!");
    this.router.navigate(['catalogo']);
  }

}
