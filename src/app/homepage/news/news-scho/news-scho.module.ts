import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { ConfirmDialogModule } from 'src/app/shared/styles/components/confirm-dialog/confirm-dialog.module';
import { PaginationModule } from 'src/app/shared/styles/components/pagination/pagination.module';
import { SharedModule } from 'src/app/shared/styles/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzModalModule,
    NzProgressModule,
    NzTimelineModule,
    NzTableModule,
    NzTagModule,
    NzSelectModule,
    NzPaginationModule,

    NzInputModule,
    DragDropModule,
    NzMessageModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    PaginationModule,
    NzFormModule,
    // DropdownModule,
    SharedModule,
    NzPopoverModule,
  ],
})
export class NewsSchoModule {}
