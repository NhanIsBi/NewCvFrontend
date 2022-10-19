import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollapsibleModule } from '../../directives/collapsible/collapsible.module';
import { UiCommonModule } from '../../lib/ui-common.module';
import { SectionComponent } from './section.component';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, CollapsibleModule, UiCommonModule],
  exports: [SectionComponent],
})
export class SectionModule {}
