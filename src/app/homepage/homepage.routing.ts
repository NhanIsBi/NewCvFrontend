import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { EventComponent } from './event/event.component';
import { HomepageComponent } from './homepage.component';
import { LoginComponent } from './login/login.component';
import { NewsScholarshipComponent } from './news/news-scholarship/news-scholarship.component';
import { PageComponent } from './page/page.component';
import { RecruitComponent } from './recruit/recruit.component';
import { ResignComponent } from './resign/resign.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomepageComponent,
        children: [
          {
            path: 'page',
            component: PageComponent,
          },
          {
            path: 'scholarship',
            component: ScholarshipComponent,
          },
          {
            path: 'news-scholarship',
            component: NewsScholarshipComponent,
          },
          {
            path: 'event',
            component: EventComponent,
          },
          {
            path: 'competition',
            component: CompetitionComponent,
          },
          {
            path: 'recruit',
            component: RecruitComponent,
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'resign',
            component: ResignComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
