import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TimezonePickerModule} from 'ng-timezone-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TimezonePickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
