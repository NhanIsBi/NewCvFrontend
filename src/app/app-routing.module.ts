import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild([
      {
        path: 'NewCvFrontend',
        component: AppComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
