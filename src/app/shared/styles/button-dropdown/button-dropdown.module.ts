import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownModule } from '../../directives/dropdown/dropdown.module';
import { ButtonDropdownComponent } from './button-dropdown.component';

@NgModule({
  declarations: [ButtonDropdownComponent],
  imports: [CommonModule, DropdownModule],
  exports: [ButtonDropdownComponent],
})
export class ButtonDropdownModule {}
