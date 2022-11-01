import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsFormComponent } from './news-form/news-form.component';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsEntryComponent } from './news-entry/news-entry.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NewsEntryComponent,
        data: {
          title: 'Tất cả khung năng lực',
        },
        children: [
          {
            path: 'create',
            component: NewsFormComponent,
          },
          {
            path: ':comFrameId',
            children: [
              {
                path: '',
                component: NewsViewComponent,
              },
              {
                path: 'edit',
                component: NewsFormComponent,
              },
            ],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
