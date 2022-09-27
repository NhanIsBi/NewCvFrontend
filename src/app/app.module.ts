import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ResignComponent } from './resign/resign.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [
    AppComponent,
    ResignComponent,
    LoginComponent,
    HomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NzPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
