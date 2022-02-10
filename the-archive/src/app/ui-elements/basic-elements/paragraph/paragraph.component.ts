import { Component, ComponentRef, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContainerComponent } from '../../dialog/dialog-container/dialog-container.component';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @Input() data: any;
  dataInput: any;

  devMode: boolean = false;
  testData: string = '';

  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    // this.devMode = this.data.data.devMode;
    this.devMode = false;
    if(this.devMode) {
      this.launchDialog();
    }
  }

  editElement() {
    this.launchDialog();
  }

  deleteElement() {
    this.data.data.componentRef.destroy();
  }

  launchDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = [
      {
        type: 'paragraph',
        formElements: [
          {
            label: 'styling',
            type: 'dropdown',
            data: [
              'Test1', 'Test2'
            ]
          }, {
            label: 'context',
            type: 'text'
          }
        ]
      }
    ];

    dialogConfig.width = '450px';
    let dialogRef = this.dialog.open(DialogContainerComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.dataInput = result;
      }
    });
  }
}