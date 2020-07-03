import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-homeslide',
  templateUrl: './homeslide.component.html',
  styleUrls: ['./homeslide.component.scss']
})
export class HomeslideComponent implements OnInit {
  @Input() idSection: any;
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
