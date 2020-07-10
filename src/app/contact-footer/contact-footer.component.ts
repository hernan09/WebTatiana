import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.scss']
})
export class ContactFooterComponent implements OnInit {
  section: String='inicio';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPage(name:string){
    console.log("voy a catalogo!");
    this.section = name;
    this.router.navigate([`${name}`]);
  }

}
