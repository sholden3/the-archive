import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CodeEditorComponent } from '../../advance-elements/code-editor/code-editor.component';
import { ParagraphComponent } from '../../basic-elements/paragraph/paragraph.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  @Input() data: any;

  // dragDropList = ['editor', 'dropdown-editor'];
  dropTargetIds: string[] = [];

  navBar = [];
  canvasItems = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private test: TestService
    ) { 
    
  }

  ngOnInit(): void {
    this.test.addNewId('sideNav');
    this.navBar = this.data.data.items;
    this.test.dropTargetIds.subscribe((data) => {
      this.dropTargetIds = data;
      console.log(this.dropTargetIds);
    })
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

}
