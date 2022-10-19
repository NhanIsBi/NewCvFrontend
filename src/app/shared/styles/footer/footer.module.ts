import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FooterComponent } from './footer.component';
@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, NzPaginationModule],
  exports: [FooterComponent],
})
export class FooterModule {}
