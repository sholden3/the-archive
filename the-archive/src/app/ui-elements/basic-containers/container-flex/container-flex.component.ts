import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContentFactoryService } from 'src/app/services/content-factory/content-factory.service';
import { TestService } from 'src/app/services/test/test.service';
import { DialogContainerComponent } from '../../dialog/dialog-container/dialog-container.component';
import { ContainerDirective } from '../../Directives/Container/container.directive';

@Component({
  selector: 'app-container-flex',
  templateUrl: './container-flex.component.html',
  styleUrls: ['./container-flex.component.scss']
})
export class ContainerFlexComponent implements OnInit {

  @Input() data: any | null;
  direction: String | null;
  padding: String | null;
  layout: String | null;

  devMode: boolean = false;

  dragDropList = ['editor', 'sideNav'];
  dataInput: any;

  public canvasItems: any[] = [];
  @Input('sideNav') sideNav: string[];
  @ViewChild(ContainerDirective, {static: true}) appContainer!: ContainerDirective;
  @ViewChild("element", {static: true}) elementRef: ElementRef | null;

  //private contentFactory: ContentFactoryService
  constructor(
    private contentFactory: ContentFactoryService,
    private changeDetector: ChangeDetectorRef,
    private test: TestService,
  ) { 
    this.data = null;
    this.direction = null;
    this.padding = null;
    this.layout = null;
    this.elementRef = null;
    this.sideNav = [];
  }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    this.direction = this.data?.data.dir;
    this.padding = this.data?.data.padding;
    this.layout = this.data?.data.layout;
    const viewContainerRef = this.appContainer.viewContainerRef;
    viewContainerRef.clear();
    if(this.data!.children) {
      for(let item of this.data!.children) {
        this.contentFactory.resolveComponent(item, item.component, viewContainerRef, item.data);
      }
    }
  }

  // launchDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.data = [
  //     {
  //       type: 'paragraph',
  //       formElements: [
  //         {
  //           label: 'styling',
  //           type: 'dropdown',
  //           data: [
  //             'Test1', 'Test2'
  //           ]
  //         }, {
  //           label: 'context',
  //           type: 'text'
  //         }
  //       ]
  //     }
  //   ];

  //   dialogConfig.width = '450px';
  //   let dialogRef = this.dialog.open(DialogContainerComponent,dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result) {
  //       this.dataInput = result;
  //     }
  //   });
  // }

  // drop(event: any) {
  //   console.log(event);
  // }

  // dragMoved(event: any) {
  //   console.log(event);
  // }

  // loadComponent() {
  //   // Need to push contentFactory call out of this and back into the site-manager to get around
  //   // circular dependency.
  //   // Look at potentially passing the service account directly into here as well,
  //   // from sitemanager.
  //   // this.direction = this.data?.data.dir;
  //   // this.padding = this.data?.data.padding + "px";
  //   // this.layout = this.data?.data.layout;
  //   // const viewContainerRef = this.appContainer;
  //   // viewContainerRef.clear();
  //   // if(this.data!.children) {
  //   //   for(let item of this.data!.children) {
  //   //     this.data.data.contentFactoryService.resolveComponent(item, item.component, viewContainerRef, item.data);
  //   //   }
  //   // }
  // }

}
