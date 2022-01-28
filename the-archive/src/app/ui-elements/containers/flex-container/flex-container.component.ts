import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Content } from 'src/app/models/content/content.model';
import { ContainerDirective } from '../../Directives/Container/container.directive';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit {

  @Input() entities: Content | null;
  direction: String | null;
  padding: String | null;
  layout: String | null;

  @ViewChild(ContainerDirective, {static: true}) appContainer!: ContainerDirective;

  constructor() { 
    this.entities = null;
    this.direction = null;
    this.padding = null;
    this.layout = null;
  }

  ngOnInit(): void {
  }

}
