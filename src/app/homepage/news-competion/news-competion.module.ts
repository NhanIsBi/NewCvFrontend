import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/styles/shared.module';
import { NewsCompetionComponent } from './news-competion.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NewsCompetionRoutingModule } from './news-competion.routing';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CompetionDetailComponent } from './competion-detail/competion-detail.component';

@NgModule({
  declarations: [NewsCompetionComponent, CompetionDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    NzPaginationModule,
    NewsCompetionRoutingModule,
    NzInputModule,
  ],
})
export class NewsCompetionModule {}
