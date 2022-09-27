import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { PageComponent } from './page/page.component';

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
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
