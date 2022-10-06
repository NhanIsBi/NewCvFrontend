import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogRef } from './dialog-ref';
import { DIALOG_DATA } from './dialog-tokens';

export interface IConfirmDialogConfig {
  title: string;
  content: string;
  type: 'default' | 'warning' | 'danger' | 'success';
  confirmText?: string;
  cancelText?: string;
  mode?: 'uno' | 'duo';
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open(config?: IConfirmDialogConfig): DialogRef {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',
    });

    const dialogRef = new DialogRef(overlayRef);

    console.log(config);

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: DialogRef, useValue: dialogRef },
        { provide: DIALOG_DATA, useValue: config },
      ],
    });

    const portal = new ComponentPortal(ConfirmDialogComponent, null, injector);

    overlayRef.attach(portal);

    return dialogRef;
  }
}
