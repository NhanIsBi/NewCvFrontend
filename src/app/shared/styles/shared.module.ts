import { NgModule } from '@angular/core';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DropdownComponent } from './dropdown/dropdown.component';
@NgModule({
  declarations: [DropdownComponent],
  imports: [NzMessageModule, NzDropDownModule, FormsModule, CommonModule],
  exports: [
    NzMessageModule,
    NzDropDownModule,
    FormsModule,
    CommonModule,
    NzPopoverModule,
    NzModalModule,
    DropdownComponent,
  ],
})
export class SharedModule {}
