import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {DatePipe, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    NzNotificationModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US},DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
