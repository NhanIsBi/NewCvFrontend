import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompetionDetailComponent } from './competion-detail/competion-detail.component';
import { NewsCompetionComponent } from './news-competion.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NewsCompetionComponent,
        data: {
          title: 'Tất cả khung năng lực',
        },
        // children: [
        //   {
        //     path: 'create',
        //     component: CompetionDetailComponent,
        //   },
        //   {
        //     path: ':comFrameId',
        //     children: [
        //       {
        //         path: '',
        //         component: CompetionDetailComponent,
        //       },
        //       // {
        //       //   path: 'edit',
        //       //   component: CompetenceFrameFormComponent,
        //       // },
        //     ],
        //   },
        // ],
      },
      {
        path: 'create',
        component: CompetionDetailComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class NewsCompetionRoutingModule {}
