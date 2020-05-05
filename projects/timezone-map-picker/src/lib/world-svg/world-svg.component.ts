import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimezoneMapPickerService} from '../timezone-map-picker.service';
import {Timezone} from '../types';

@Component({
  selector: 'cth-world-svg',
  templateUrl: './world-svg.component.html',
  styleUrls: ['./world-svg.component.less']
})
export class WorldSvgComponent implements OnInit {

  public timezones: Array<Timezone>;
  @Input() public width: number;
  @Input() public height: number;
  @Input() public defaultTimezone: string;

  @Output() public timezoneSelected: EventEmitter<Timezone> = new EventEmitter<Timezone>();
  @Output() public hoverChanged: EventEmitter<Timezone> = new EventEmitter<Timezone>();

  public get viewBox() {
    return `0 0 ${this.width || 0} ${this.height || 0}`;
  }

  constructor(private timezoneService: TimezoneMapPickerService) {
    this.timezones = this.timezoneService.getFullTimezoneList();
  }

  ngOnInit() {
    if (!!this.defaultTimezone) {
      this.timezoneService.setTimezoneByKey(this.defaultTimezone);
    }
  }

  areaSelected(timezone) {
    this.timezoneService.setTimezoneSelected(timezone);
    this.timezoneSelected.emit(timezone);
  }

  mouseEnter(selected) {
    this.timezoneService.hovered = selected;
    this.hoverChanged.emit(selected);
    this.timezones.forEach((timezone) => {
      timezone.sameOffset = timezone.offset === selected.offset;
    });
  }

  mouseLeave(selected) {
    this.timezoneService.hovered = null;
    this.hoverChanged.emit(null);
    this.timezones.forEach((timezone) => {
      timezone.sameOffset = false;
    });
  }
}
