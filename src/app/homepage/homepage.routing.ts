import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { EventComponent } from './event/event.component';
import { HomepageComponent } from './homepage.component';
import { PageComponent } from './page/page.component';
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
            path: 'event',
            component: EventComponent,
          },
          {
            path: 'competition',
            component: CompetitionComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
