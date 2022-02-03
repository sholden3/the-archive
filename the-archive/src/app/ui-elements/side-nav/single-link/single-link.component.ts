import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-link',
  templateUrl: './single-link.component.html',
  styleUrls: ['./single-link.component.scss']
})
export class SingleLinkComponent implements OnInit {

  @Input() data: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
