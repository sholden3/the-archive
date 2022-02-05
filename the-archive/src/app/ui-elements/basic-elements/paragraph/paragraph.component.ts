import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogContainerComponent } from '../../dialog/dialog-container/dialog-container.component';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  //@Input() data: any;
  data: any;

  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
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
        this.data = result;
      }
    });
  }

}
