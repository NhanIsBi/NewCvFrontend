import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { InfomationComponent } from './infomation/infomation.component';
import { LoginComponent } from './login/login.component';
import { NewsCompetionComponent } from './news-competion/news-competion.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { NewsScholarshipComponent } from './news-scholarship/news-scholarship.component';
import { PageComponent } from './page/page.component';
import { ResignComponent } from './resign/resign.component';
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
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'resign',
            component: ResignComponent,
          },
          {
            path: 'infomation',
            component: InfomationComponent,
          },
          {
            path: 'news-competion',
            loadChildren: () =>
              import('./news-competion/news-competion.module').then(
                (m) => m.NewsCompetionModule
              ),
          },
          {
            path: 'news-scholarship',
            component: NewsScholarshipComponent,
          },
          {
            path: 'news-event',
            component: NewsEventComponent,
          },
          {
            path: 'competence-frames',
            loadChildren: () =>
              import('./competence-frames/competence-frames.module').then(
                (m) => m.CompetenceFrameModule
              ),
          },
          {
            path: 'news',
            loadChildren: () =>
              import('./news/news.module').then((m) => m.NewsModule),
          },
          {
            path: 'companys',
            loadChildren: () =>
              import('./company/companys.module').then((m) => m.CompanysModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
