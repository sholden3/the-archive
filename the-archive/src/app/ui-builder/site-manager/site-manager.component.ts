import { moveItemInArray } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContentFactoryService } from 'src/app/services/content-factory/content-factory.service';
import { TestService } from 'src/app/services/test/test.service';
import { ContainerDirective } from 'src/app/ui-elements/Directives/Container/container.directive';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-site-manager',
  templateUrl: './site-manager.component.html',
  styleUrls: ['./site-manager.component.scss']
})
export class SiteManagerComponent implements OnInit {

  @Input('sideNav') sideNav: string[];
  nodeLookup: any = {};
  dropActionTodo: DropInfo | null = null;
  nodes: TreeNode[] = [];

  dropTargetIds: string[] = [];

  @ViewChild("element", {static: false}) container!: ContainerDirective;

  constructor(
    private contentFactory: ContentFactoryService,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document,
    private test: TestService,
    private changeDetector: ChangeDetectorRef,
  ) { 
    this.sideNav = [];
  }

  ngOnInit(): void {
    this.test.dropTargetIds.subscribe((data) => {
      this.dropTargetIds = data;
    });
    this.test.addNewId('main');
    this.test.demoData.subscribe((data) => {
      this.nodes = data;
    })
  }

  getParentNodeId(id: string, nodesToSearch: TreeNode[], parentId: string): string | null {
    for (let node of nodesToSearch) {
      if (node.id == id) return parentId;
      let ret = this.getParentNodeId(id, node.children, node.id);
      if (ret) return ret;
    }
    return null;
  }

  drop(event: any) {
    const draggedItemId = event.item.data;
    const parentItemId = event.previousContainer.id;
    if(!draggedItemId) {
      const id = uuid();
      const node = {
        id: id,
        component: event.previousContainer.data[0][event.previousIndex].component,
        data: {
          factory: this.contentFactory,
          dir: "row",
          padding: 10,
          layout: "center",
          devMode: true
        },
        children: []
      };
      this.test.addNewNode(node);
      this.nodeLookup[id] = node
      this.test.addNewId(id);
    }
    if(this.dropActionTodo) {
      const targetListId = this.getParentNodeId(this.dropActionTodo!.targetId, this.nodes, 'main');
      const draggedItem = this.nodeLookup[draggedItemId];
      const oldItemContainer = parentItemId != 'main' ? this.nodeLookup[parentItemId].children : this.nodes;
      const newContainer = targetListId != 'main' ? this.nodeLookup[targetListId!].children : this.nodes;
      let i = oldItemContainer.findIndex((c: { id: any; }) => c.id === draggedItemId);
      switch (this.dropActionTodo!.action) {
        case 'before':
        case 'after':
          oldItemContainer.splice(i, 1);
          const targetIndex = newContainer.findIndex((c: { id: string; }) => c.id === this.dropActionTodo!.targetId);
          if (this.dropActionTodo!.action == 'before') {
            newContainer.splice(targetIndex, 0, draggedItem);
          } else {
            newContainer.splice(targetIndex + 1, 0, draggedItem);
          }
          break;
        case 'inside':
          if(this.nodeLookup[this.dropActionTodo!.targetId].component.name.includes('Container')) {
            oldItemContainer.splice(i, 1);
            this.nodeLookup[this.dropActionTodo!.targetId].children.push(draggedItem)
          }
          break;
      }
    }
  }

  dragMoved(event: any) {
    let e = this.document.elementFromPoint(event.pointerPosition.x, event.pointerPosition.y);
    if(!e) {
      return;
    }
    let container = e.classList.contains("node-item") ? e : e.closest(".node-item");
    if(!container) {
      return;
    }
    this.dropActionTodo = {
      targetId: container.getAttribute("data-id")!
    };
    const targetRect = container.getBoundingClientRect();
    const oneThird = targetRect.height / 3;

    if(event.pointerPosition.y - targetRect.top < oneThird) {
      this.dropActionTodo["action"] = "before";
    } else if (event.pointerPosition.y - targetRect.top > 2 * oneThird) {
      this.dropActionTodo["action"] = "after";
    } else {
      this.dropActionTodo["action"] = "inside";
    }
  }
}

interface TreeNode {
  id: string;
  children: TreeNode[];
  component: any;
  data: any;
  isExpanded?: boolean;
}

interface DropInfo {
  targetId: string;
  action?: string;
}