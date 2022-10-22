import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { LoginComponent } from './login/login.component';
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
            path: 'competence-frames',
            loadChildren: () =>
              import('./competence-frames/competence-frames.module').then(
                (m) => m.CompetenceFrameModule
              ),
          },
          {
            //onSelectionChangeNews();
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
