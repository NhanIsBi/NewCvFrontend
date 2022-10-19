import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { RightSideComponent } from './right-side.component';

@NgModule({
  declarations: [RightSideComponent],
  imports: [CommonModule, NzSkeletonModule],
  exports: [RightSideComponent],
})
export class RightSideModule {}
