import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenceFramesEntryComponent } from './competence-frames/competence-frames-entry/competence-frames-entry.component';
import { HomepageComponent } from './homepage.component';
import { LoginComponent } from './login/login.component';
import { NewsScholarshipComponent } from './news-scholarship/news-scholarship.component';
import { PageComponent } from './page/page.component';
import { RecruitComponent } from './recruit/recruit.component';
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
          {
            path: 'competence-frames',
            component: CompetenceFramesEntryComponent,
          },
          {
            path: ':id',
            component: NewsScholarshipComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
