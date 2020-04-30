import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {findValue, generateElement, Timezone} from './utils';
import moment from 'moment-timezone';
import {TimezonePickerService} from './timezone-picker.service';

@Component({
  selector: 'cth-timezone-picker',
  templateUrl: './timezone-picker.component.html',
  styles: []
})
export class TimezonePickerComponent implements OnInit {
  public timezones;

  @Input() public defaultTimezone: string = null;
  @Input() public width = 500;
  @Input() public height = 250;
  @Input() public dayLightSaving: boolean = (typeof moment == "function");

  @Output() public hoverTextChanged: EventEmitter<Timezone> = new EventEmitter<Timezone>();
  @Output() public mapSelectionChanged: EventEmitter<Timezone> = new EventEmitter<Timezone>();

  public get dimensions() {
    return {
      height: this.height,
      width: this.width
    };
  }

  constructor(private timezoneService: TimezonePickerService) {
    this.timezones = this.timezoneService.getFullTimezoneList();
    this.addMomentProperties();
  }

  ngOnInit() {
    if (!this.defaultTimezone) {
      const systemTimezone = this.timezoneService.getSystemTimezone();

      if (!!systemTimezone) {
        this.defaultTimezone = systemTimezone.zonename;
      }
    }

    this.timezoneService.setTimezoneByKey(this.defaultTimezone);
  }

  addMomentProperties() {
    this.timezones.forEach((zoneObj) => {

      if (moment) {
        const momentObj = moment().tz(zoneObj.timezone);
        zoneObj.zonename = momentObj.zoneName();
        zoneObj.timezone = momentObj._z.name
      }
    })
  }
}
