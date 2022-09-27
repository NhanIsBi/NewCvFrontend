import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage.routing';
import { PageComponent } from './page/page.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, HomepageRoutingModule, NzPaginationModule],
})
export class HomepageModule {}
