import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-manager',
  templateUrl: './site-manager.component.html',
  styleUrls: ['./site-manager.component.scss']
})
export class SiteManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("in dash");
  }

}
