import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isScreenSmall = '';

  constructor() { }

  ngOnInit(): void {
  }

}
