import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-links',
  templateUrl: './dropdown-links.component.html',
  styleUrls: ['./dropdown-links.component.scss']
})
export class DropdownLinksComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
