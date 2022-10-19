import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompetenceFrameFormComponent } from './competence-frame-form/competence-frame-form.component';
import { CompetenceFrameViewComponent } from './competence-frame-view/competence-frame-view.component';
import { CompetenceFramesEntryComponent } from './competence-frames-entry/competence-frames-entry.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CompetenceFramesEntryComponent,
        data: {
          title: 'Tất cả khung năng lực',
        },
        children: [
          {
            path: 'create',
            component: CompetenceFrameFormComponent,
          },
          {
            path: ':comFrameId',
            children: [
              {
                path: '',
                component: CompetenceFrameViewComponent,
              },
              {
                path: 'edit',
                component: CompetenceFrameFormComponent,
              },
            ],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CompetenceFrameRoutingModule {}
