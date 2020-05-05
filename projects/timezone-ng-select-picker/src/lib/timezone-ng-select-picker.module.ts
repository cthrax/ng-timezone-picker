import {NgModule} from '@angular/core';
import {TimezoneNgSelectPickerComponent} from './timezone-ng-select-picker.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TimezoneMapPickerModule} from '@cthrax/timezone-map-picker';


@NgModule({
  declarations: [TimezoneNgSelectPickerComponent],
  imports: [
    NgSelectModule,
    BrowserModule,
    FormsModule,
    TimezoneMapPickerModule
  ],
  exports: [TimezoneNgSelectPickerComponent]
})
export class TimezoneNgSelectPickerModule { }
