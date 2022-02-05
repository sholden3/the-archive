import { Component, Input, OnInit } from '@angular/core';
import { CodeEditorComponent } from '../../advance-elements/code-editor/code-editor.component';
import { ParagraphComponent } from '../../basic-elements/paragraph/paragraph.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  @Input() data: any;

  navBar = [];
  canvasItems = [];

  constructor() { 
    
  }

  ngOnInit(): void {
    this.navBar = this.data.data.items;
  }

}
