import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { UtilsService } from '../../app/utils.service';


@Component({
  selector: 'app-contact-footer',
  templateUrl: './contact-footer.component.html',
  styleUrls: ['./contact-footer.component.scss']
})
export class ContactFooterComponent implements OnInit {
  section: String='inicio';
  constructor(private router: Router, private utils: UtilsService) { }

  ngOnInit(): void {
    this.utils.setSelectMenu('contacto');
  }

  gotoPage(name:string){
    console.log("voy a catalogo!",name);
    this.section = name;
    this.utils.setSelectMenu(name);
    this.router.navigate([`${name}`]);
  }

}
