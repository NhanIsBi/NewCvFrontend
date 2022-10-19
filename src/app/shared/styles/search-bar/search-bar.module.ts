import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiCommonModule } from '../../lib/ui-common.module';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, FormsModule, UiCommonModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
