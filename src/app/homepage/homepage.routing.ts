import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenceFrameFormComponent } from './competence-frames/competence-frame-form/competence-frame-form.component';
import { CompetenceFrameViewComponent } from './competence-frames/competence-frame-view/competence-frame-view.component';
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
            loadChildren: () =>
              import('./competence-frames/competence-frames.module').then(
                (m) => m.CompetenceFrameModule
              ),
            // children: [
            //   {
            //     path: 'homepage',
            //     component: HomepageComponent,
            //   },
            // ],
          },
          // {
          //   path: 'competence-frames',
          //   component: CompetenceFramesEntryComponent,
          //   children: [
          //     {
          //       path: 'create',
          //       component: CompetenceFrameFormComponent,
          //     },
          //     {
          //       path: ':comFrameId',
          //       children: [
          //         {
          //           path: '',
          //           component: CompetenceFrameViewComponent,
          //         },
          //         {
          //           path: 'edit',
          //           component: CompetenceFrameFormComponent,
          //         },
          //       ],
          //     },
          //   ],
          // },
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
