import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ResignComponent } from './resign/resign.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'home',
      //   component: AppComponent,
      // },
      // {
      //   path: 'login',
      //   component: LoginComponent,
      //   // children: [
      //   //   {
      //   //     path: 'resign',
      //   //     component: ResignComponent,
      //   //   },
      //   // ],
      // },
      // {
      //   path: 'resign',
      //   component: ResignComponent,
      //   // children: [
      //   //   {
      //   //     path: 'home',
      //   //     component: ResignComponent,
      //   //   },
      //   // ],
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
