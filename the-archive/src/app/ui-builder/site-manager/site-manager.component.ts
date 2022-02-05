import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MatCardContent } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ContentFactoryService } from 'src/app/services/content-factory/content-factory.service';
import { CodeEditorComponent } from 'src/app/ui-elements/advance-elements/code-editor/code-editor.component';
import { ParagraphComponent } from 'src/app/ui-elements/basic-elements/paragraph/paragraph.component';
import { ContainerDirective } from 'src/app/ui-elements/Directives/Container/container.directive';

@Component({
  selector: 'app-site-manager',
  templateUrl: './site-manager.component.html',
  styleUrls: ['./site-manager.component.scss']
})
export class SiteManagerComponent implements OnInit {

  // @ViewChild("matContent", {static: false}) matContent: ElementRef<MatCardContent> | null;
  // @ViewChild("matContent", {static: false}) matContentView: ViewContainerRef | null;

  public canvasItems: any[] = [];
  @Input('sideNav') sideNav: string[];
  @ViewChild("element", {static: true}) elementRef: ElementRef | null;

  constructor(
    // private dialog: MatDialog,
    private contentFactory: ContentFactoryService,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) { 
    this.elementRef = null;
    // this.matContent = null;
    // this.matContentView = null;
    this.sideNav = [];
  }

  ngOnInit(): void {
  }

  drop(event: any) {
    console.log(this.elementRef);
    if(event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.currentIndex);
      const node = document.getElementById('editor');
      const domElem = this.contentFactory.resolveComponentForTesting(
        event.previousContainer.data[0][event.previousIndex].component, 
        this.viewContainerRef!,
        this.elementRef,
        event.currentIndex 
      );
      this.renderer.appendChild(this.elementRef!.nativeElement, domElem);
      //his.canvasItems.push(event.previousContainer.data[0][event.previousIndex].component)
      //console.log(this.canvasItems);
    }
  }
}

