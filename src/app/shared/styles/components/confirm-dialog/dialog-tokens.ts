import { InjectionToken } from '@angular/core';
import { IConfirmDialogConfig } from './confirm-dialog.service';

export const DIALOG_DATA = new InjectionToken<IConfirmDialogConfig>(
  'DIALOG_DATA'
);
