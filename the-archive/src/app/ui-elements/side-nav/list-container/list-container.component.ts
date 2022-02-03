import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContentFactoryService } from 'src/app/services/content-factory/content-factory.service';
import { ContainerDirective } from '../../Directives/Container/container.directive';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  @Input() data: any | null;

  @ViewChild(ContainerDirective, {static: true}) appContainer!: ContainerDirective;

  constructor(private contentFactory: ContentFactoryService) { }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.appContainer.viewContainerRef;
    viewContainerRef.clear();
    if(this.data!.children) {
      for(let item of this.data!.children) {
        this.contentFactory.resolveComponent(item, item.component, viewContainerRef, item.data);
      }
    }
  }

}
