import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContainerComponent } from '../../dialog/dialog-container/dialog-container.component';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  @Input() data: any;
  dataInput: any;

  devMode: boolean = false;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.devMode = this.data.data.devMode;
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
        type: 'code',
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
