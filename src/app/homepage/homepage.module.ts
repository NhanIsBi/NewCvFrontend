import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage.routing';
import { PageComponent } from './page/page.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SharedModule } from '../shared/styles/shared.module';
import { EventComponent } from './event/event.component';
import { CompetitionComponent } from './competition/competition.component';
import { NewsScholarshipComponent } from './news-scholarship/news-scholarship.component';
import { RecruitComponent } from './recruit/recruit.component';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { CompetenceFrameModule } from './competence-frames/competence-frames.module';

@NgModule({
  declarations: [
    PageComponent,
    ScholarshipComponent,
    EventComponent,
    CompetitionComponent,
    NewsScholarshipComponent,
    RecruitComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NzPaginationModule,
    NzInputModule,
    NzDropDownModule,
    SharedModule,
    NzOverlayModule,
    CompetenceFrameModule,
  ],
})
export class HomepageModule {}