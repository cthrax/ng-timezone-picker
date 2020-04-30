import {NgModule} from '@angular/core';
import {TimezonePickerComponent} from './timezone-picker.component';
import {WorldSvgComponent} from './world-svg/world-svg.component';
import {HoverTextComponent} from './hover-text/hover-text.component';
import {CommonModule} from '@angular/common';
import {SelectionBoxComponent} from './selection-box/selection-box.component';


@NgModule({
  declarations: [TimezonePickerComponent, WorldSvgComponent, HoverTextComponent, SelectionBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [TimezonePickerComponent]
})
export class TimezonePickerModule { }
