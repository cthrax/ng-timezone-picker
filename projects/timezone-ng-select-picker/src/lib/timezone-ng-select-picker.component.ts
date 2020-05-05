import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Timezone, TimezoneMapPickerService} from 'timezone-map-picker';

@Component({
  selector: 'cth-timezone-ng-select-picker',
  templateUrl: './timezone-ng-select-picker.component.html',
  styles: []
})
export class TimezoneNgSelectPickerComponent implements OnInit {

  public timezones: Array<Timezone>;
  @Input() public defaultTimeZone: string;
  @Input() public showDropDown: boolean = true;
  @Input() public showHover: boolean = true;

  @Input() public hoverClass: string;
  @Input() public selectClass: string;
  @Input() public mapClass: string;

  @Output() onTimeSelectionChange: EventEmitter<Timezone> = new EventEmitter<Timezone>();

  constructor(
    public timezoneService: TimezoneMapPickerService
  ) {
    this.timezones = timezoneService.getFullTimezoneList();
  }

  ngOnInit() {
    if (!!this.defaultTimeZone && this.defaultTimeZone !== '') {
      this.timezoneService.setTimezoneByKey(this.defaultTimeZone);
    }
  }

  public groupBy = (item:Timezone) => {
    const [country, timezone] = item.timezone.split("/")
    return country;
  };

  public timezoneSelectionChange(timezone: Timezone) {
    this.onTimeSelectionChange.emit(timezone);
  }

}
