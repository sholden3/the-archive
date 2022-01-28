import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-h2',
  templateUrl: './header-h2.component.html',
  styleUrls: ['./header-h2.component.scss']
})
export class HeaderH2Component implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
