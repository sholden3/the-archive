import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-h1',
  templateUrl: './header-h1.component.html',
  styleUrls: ['./header-h1.component.scss']
})
export class HeaderH1Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
