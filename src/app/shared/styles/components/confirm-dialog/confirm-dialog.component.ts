import { Component, Inject, OnInit } from '@angular/core';
import { delay, of, timer } from 'rxjs';
import { DialogRef } from './dialog-ref';
import { DIALOG_DATA } from './dialog-tokens';

@Component({
  selector: 'ehiring-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.less'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public componentData: any
  ) {
    componentData.mode = componentData.mode || 'uno';
  }

  type = 'default';
  ngOnInit(): void {}

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
