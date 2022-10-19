import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { IconsProviderModule } from './icons-provider.module';
@NgModule({
  imports: [CommonModule, IconsProviderModule, NzOverlayModule],
  exports: [IconsProviderModule, NzOverlayModule],
})
export class UiCommonModule {}
