import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Content } from 'src/app/models/content/content.model';
import { ContentFactoryService } from 'src/app/services/content-factory/content-factory.service';
import { ContainerDirective } from '../../Directives/Container/container.directive';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit {

  @Input() data: any | null;
  direction: String | null;
  padding: String | null;
  layout: String | null;

  @ViewChild(ContainerDirective, {static: true}) appContainer!: ContainerDirective;

  constructor(private contentFactory: ContentFactoryService) { 
    this.data = null;
    this.direction = null;
    this.padding = null;
    this.layout = null;
  }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    this.direction = this.data?.data.dir;
    this.padding = this.data?.data.padding + "px";
    this.layout = this.data?.data.layout;
    const viewContainerRef = this.appContainer.viewContainerRef;
    viewContainerRef.clear();
    if(this.data!.children) {
      for(let item of this.data!.children) {
        this.contentFactory.resolveComponent(item, item.component, viewContainerRef, item.data);
      }
    }
  }

}
