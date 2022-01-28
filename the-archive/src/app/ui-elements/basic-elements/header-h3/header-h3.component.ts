import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-h3',
  templateUrl: './header-h3.component.html',
  styleUrls: ['./header-h3.component.scss']
})
export class HeaderH3Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
