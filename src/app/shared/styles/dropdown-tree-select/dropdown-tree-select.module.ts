import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DropdownTreeSelectComponent } from './dropdown-tree-select.component';

@NgModule({
  declarations: [DropdownTreeSelectComponent],
  imports: [CommonModule, NzMenuModule],
  exports: [DropdownTreeSelectComponent, NzMenuModule],
})
export class DropdownTreeSelectModule {}
