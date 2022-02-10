import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
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
  dataChange: BehaviorSubject<any>;

  @ViewChild(ContainerDirective, {static: true}) appContainer!: ContainerDirective;

  constructor(
    private contentFactory: ContentFactoryService,
    private changeDetector: ChangeDetectorRef,
    ) { 
    this.dataChange = new BehaviorSubject<any>([]);
    this.data = null;
    this.direction = null;
    this.padding = null;
    this.layout = null;
  }

  ngOnInit(): void {
    // console.log(this.data);
    // this.loadComponent();
    // console.log(this.appContainer.viewContainerRef.length);
    // console.log(this.appContainer.viewContainerRef);
  }

  loadComponent() {
    this.direction = this.data?.data.dir;
    this.padding = this.data?.data.padding;
    this.layout = this.data?.data.layout;
    const viewContainerRef = this.appContainer.viewContainerRef;
    // viewContainerRef.clear();
    if(this.data!.children) {
      for(let item of this.data!.children) {
        this.contentFactory.resolveComponent(item, item.component, viewContainerRef, item.data);
      }
    }
  }

  ngAfterViewChecked() {
    // console.log(this.data);
    this.changeDetector.detectChanges();
  }

}
