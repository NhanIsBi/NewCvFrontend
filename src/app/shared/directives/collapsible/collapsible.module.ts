import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CollapsibleContentDirective,
  CollapsibleDirective,
  CollapsibleTitleDirective,
} from './collapsible.directive';

@NgModule({
  declarations: [
    CollapsibleDirective,
    CollapsibleTitleDirective,
    CollapsibleContentDirective,
  ],
  imports: [CommonModule],
  exports: [
    CollapsibleDirective,
    CollapsibleTitleDirective,
    CollapsibleContentDirective,
  ],
})
export class CollapsibleModule {}
