import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, NgZone, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Content } from 'src/app/models/content/content.model';
import { ContentFactoryService } from 'src/app/services/content-factory/content-factory.service';
import { TestService } from 'src/app/services/test/test.service';
import { ContainerDirective } from '../../Directives/Container/container.directive';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss']
})
export class FlexContainerComponent implements OnInit {

  // _data: any;

  @Input() data: any | null;
  direction: String | null;
  padding: String | null;
  layout: String | null;

  @ViewChild(ContainerDirective, {static: true}) appContainer!: ContainerDirective;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private test: TestService,
    private zone: NgZone
    ) { 
    this.data = null;
    this.direction = null;
    this.padding = null;
    this.layout = null;
  }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.test.demoData.subscribe((data) => {
        console.log(data);
        this.loadComponent();
        this.changeDetector.detectChanges();
      })
    })
    // this.loadComponent();
  }

  loadComponent() {
    this.direction = this.data?.data.dir;
    this.padding = this.data?.data.padding;
    this.layout = this.data?.data.layout;
    const viewContainerRef = this.appContainer.viewContainerRef;
    viewContainerRef.clear();
    if(this.data!.children) {
      for(let item of this.data!.children) {
        const componentRef = this.data.data.factory.resolveComponent(item, item.component, viewContainerRef, item.data);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.data);
  }
}
