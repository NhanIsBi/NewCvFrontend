import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ResignComponent } from './resign/resign.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ResignComponent,
    LoginComponent,
    HomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NzDropDownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
