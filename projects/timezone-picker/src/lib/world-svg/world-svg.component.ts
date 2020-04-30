import {Component, Input, OnInit} from '@angular/core';
import {Timezone} from '../utils';
import {TimezonePickerService} from '../timezone-picker.service';

@Component({
  selector: 'cth-world-svg',
  templateUrl: './world-svg.component.html',
  styleUrls: ['./world-svg.component.less']
})
export class WorldSvgComponent implements OnInit {

  public timezones: Array<Timezone>;
  @Input() public width: number;
  @Input() public height: number;

  public get viewBox() {
    return `0 0 ${this.width || 0} ${this.height || 0}`;
  }

  constructor(private timezoneService: TimezonePickerService) {
    this.timezones = this.timezoneService.getFullTimezoneList();
  }

  ngOnInit() {
  }

  areaSelected(timezone) {
    this.timezones.some((timezone) => {
      if (timezone.selected === true) {
        timezone.selected = false;
        return true;
      }
      return false;
    });

    timezone.selected = true;
  }

  mouseEnter(selected) {
    this.timezones.forEach((timezone) => {
      timezone.sameOffset = timezone.offset === selected.offset;
    });
    /* Only if hover text turned on */
    /*
      var el = null,
        data = $(e.target).data(),
        hoverKey = options.mapHoverType,
        hoverText = options.hoverText;
      if (hoverKey) {
        el = $('.timezone-map polygon[data-' + hoverKey + '="' + data[hoverKey] + '"]');
      } else {
        el = $(e.currentTarget);
      }
      this.$el.find('.hover-text p').addClass('active').text(hoverText && hoverText instanceof Function ? hoverText(e, data) : (data.timezone + " (" + data.zonename + ")"));
     */
  }

  mouseLeave(selected) {
    this.timezones.forEach((timezone) => {
      timezone.sameOffset = timezone.offset !== selected.offset;
    });
    /*
      this.$el.find('.hover-text p').removeClass('active').text('');
     */
  }
}
