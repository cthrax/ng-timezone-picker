import {NgModule} from '@angular/core';
import {TimezoneMapPickerComponent} from './timezone-map-picker.component';
import {WorldSvgComponent} from './world-svg/world-svg.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [TimezoneMapPickerComponent, WorldSvgComponent],
  imports: [
    CommonModule
  ],
  exports: [TimezoneMapPickerComponent]
})
export class TimezoneMapPickerModule { }
