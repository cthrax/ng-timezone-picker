import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimezoneNgSelectPickerModule} from 'timezone-ng-select-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      TimezoneNgSelectPickerModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
