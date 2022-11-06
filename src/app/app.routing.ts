import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full',
      },
      // {
      //   path: 'home',
      //   component: AppComponent,
      // },
      {
        path: 'homepage',
        loadChildren: () =>
          import('./homepage/homepage.module').then((m) => m.HomepageModule),
        // children: [
        //   {
        //     path: 'homepage',
        //     component: HomepageComponent,
        //   },
        // ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
