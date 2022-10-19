import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DropdownContentDirective,
  DropdownDirective,
  DropdownToggleDirective,
} from './dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    DropdownContentDirective,
    DropdownToggleDirective,
  ],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    DropdownContentDirective,
    DropdownToggleDirective,
  ],
})
export class DropdownModule {}
