import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-builder',
  templateUrl: './ui-builder.component.html',
  styleUrls: ['./ui-builder.component.scss']
})
export class UiBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("site-manager");
  }

}
