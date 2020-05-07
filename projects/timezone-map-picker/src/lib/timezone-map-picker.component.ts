import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimezoneMapPickerService} from './timezone-map-picker.service';
import {Timezone} from './types';

@Component({
  selector: 'cth-timezone-map-picker',
  templateUrl: './timezone-map-picker.component.html',
  styles: []
})
export class TimezoneMapPickerComponent implements OnInit {
  public timezones;

  @Input() public defaultTimezone: string = null;
  @Input() public width = 100;
  @Input() public height = 50;
  @Input() public mapClass?: string;

  @Output() public timezoneSelected: EventEmitter<Timezone> = new EventEmitter<Timezone>();
  @Output() public hoverChanged: EventEmitter<Timezone> = new EventEmitter<Timezone>();

  public get dimensions() {
    return {
      height: this.height,
      width: this.width
    };
  }

  constructor(private timezoneService: TimezoneMapPickerService) {
    this.timezones = this.timezoneService.getFullTimezoneList();
  }

  public timezoneAreaSelected(timezone: Timezone) {
    this.timezoneSelected.emit(timezone);
  }

  public timezoneHoverChanged(timezone: Timezone) {
    this.hoverChanged.emit(timezone);
  }

  ngOnInit() {
    if (!this.defaultTimezone) {
      const systemTimezone = this.timezoneService.getSystemTimezone();

      if (!!systemTimezone) {
        this.defaultTimezone = systemTimezone.timezone;
      }
    }

    this.timezoneService.setTimezoneByKey(this.defaultTimezone);
  }
}
