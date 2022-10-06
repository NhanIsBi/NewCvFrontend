import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [CommonModule],
  exports: [],
})
export class ConfirmDialogModule {}

export { ConfirmDialogService } from './confirm-dialog.service';
