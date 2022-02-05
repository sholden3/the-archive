import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent implements OnInit {

  data: any;
  output: any;

  constructor(
    private dialogRef: MatDialogRef<DialogContainerComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { 
    this.data = data;
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.output);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
