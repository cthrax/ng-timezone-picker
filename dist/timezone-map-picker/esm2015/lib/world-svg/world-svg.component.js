import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimezoneMapPickerService } from '../timezone-map-picker.service';
let WorldSvgComponent = class WorldSvgComponent {
    constructor(timezoneService) {
        this.timezoneService = timezoneService;
        this.timezoneSelected = new EventEmitter();
        this.hoverChanged = new EventEmitter();
        this.timezones = this.timezoneService.getFullTimezoneList();
    }
    get viewBox() {
        return `0 0 ${this.width || 0} ${this.height || 0}`;
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
};
WorldSvgComponent.ctorParameters = () => [
    { type: TimezoneMapPickerService }
];
tslib_1.__decorate([
    Input()
], WorldSvgComponent.prototype, "width", void 0);
tslib_1.__decorate([
    Input()
], WorldSvgComponent.prototype, "height", void 0);
tslib_1.__decorate([
    Input()
], WorldSvgComponent.prototype, "defaultTimezone", void 0);
tslib_1.__decorate([
    Output()
], WorldSvgComponent.prototype, "timezoneSelected", void 0);
tslib_1.__decorate([
    Output()
], WorldSvgComponent.prototype, "hoverChanged", void 0);
WorldSvgComponent = tslib_1.__decorate([
    Component({
        selector: 'cth-world-svg',
        template: "<svg:svg xmlns:svg=\"http://www.w3.org/2000/svg\" class=\"timezone-map\" [attr.viewBox]=\"viewBox\">\n  <svg:path *ngFor=\"let timezoneArea of timezones\"\n         [attr.d]=\"timezoneArea.points\"\n         (click)=\"areaSelected(timezoneArea)\"\n         (mouseenter)=\"mouseEnter(timezoneArea)\"\n         (mouseleave)=\"mouseLeave(timezoneArea)\"\n         [ngClass]=\"{active: timezoneArea.selected, offset: timezoneArea.sameOffset}\"/>\n</svg:svg>\n",
        styles: ["body.example{background-color:#9ddaf8}.timezone-map path{fill:#262626}.timezone-map path.active{fill:orange}.timezone-map path.offset{fill:#9ddaf8}.timezone-map path:hover{fill:orange;cursor:pointer}.filter-box>*{float:left;height:24px}.filter-box select{width:45%;padding:0 0 0 10px}.filter-box .quick-link{width:52%;overflow-x:auto;white-space:nowrap;overflow-y:hidden}.filter-box .quick-link span{font-weight:300;border-radius:3px;color:#000;background-color:#fff;border:1px solid #000;margin-left:10px;font-size:9px;padding:4px 6px}.filter-box .quick-link span.active{color:#fff;background-color:orange}.filter-box .quick-link span:hover{color:#fff;background-color:orange;cursor:pointer}.filter-box .hover-text{height:20px;width:100%;padding:10px}.filter-box .hover-text p{opacity:0;text-align:center;transform:scale(10);transition:.3s ease-in-out .2s}.filter-box .hover-text p.active{opacity:1;transform:scale(1);transition:.3s ease-in-out .1s}"]
    })
], WorldSvgComponent);
export { WorldSvgComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ybGQtc3ZnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdGhyYXgvdGltZXpvbmUtbWFwLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi93b3JsZC1zdmcvd29ybGQtc3ZnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQVF4RSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWM1QixZQUFvQixlQUF5QztRQUF6QyxvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7UUFQNUMscUJBQWdCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDeEUsaUJBQVksR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztRQU9uRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBTkQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFNRCxRQUFRO1FBQ04sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsUUFBUTtRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFRO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2xDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFRO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2xDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7O1lBOUJzQyx3QkFBd0I7O0FBWHBEO0lBQVIsS0FBSyxFQUFFO2dEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTtpREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7MERBQWdDO0FBRTlCO0lBQVQsTUFBTSxFQUFFOzJEQUFnRjtBQUMvRTtJQUFULE1BQU0sRUFBRTt1REFBNEU7QUFSMUUsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLG1kQUF5Qzs7S0FFMUMsQ0FBQztHQUNXLGlCQUFpQixDQTRDN0I7U0E1Q1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGltZXpvbmVNYXBQaWNrZXJTZXJ2aWNlfSBmcm9tICcuLi90aW1lem9uZS1tYXAtcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtUaW1lem9uZX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjdGgtd29ybGQtc3ZnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dvcmxkLXN2Zy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dvcmxkLXN2Zy5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdvcmxkU3ZnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgdGltZXpvbmVzOiBBcnJheTxUaW1lem9uZT47XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyBkZWZhdWx0VGltZXpvbmU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgcHVibGljIHRpbWV6b25lU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxUaW1lem9uZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWV6b25lPigpO1xuICBAT3V0cHV0KCkgcHVibGljIGhvdmVyQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFRpbWV6b25lPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGltZXpvbmU+KCk7XG5cbiAgcHVibGljIGdldCB2aWV3Qm94KCkge1xuICAgIHJldHVybiBgMCAwICR7dGhpcy53aWR0aCB8fCAwfSAke3RoaXMuaGVpZ2h0IHx8IDB9YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZXpvbmVTZXJ2aWNlOiBUaW1lem9uZU1hcFBpY2tlclNlcnZpY2UpIHtcbiAgICB0aGlzLnRpbWV6b25lcyA9IHRoaXMudGltZXpvbmVTZXJ2aWNlLmdldEZ1bGxUaW1lem9uZUxpc3QoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghIXRoaXMuZGVmYXVsdFRpbWV6b25lKSB7XG4gICAgICB0aGlzLnRpbWV6b25lU2VydmljZS5zZXRUaW1lem9uZUJ5S2V5KHRoaXMuZGVmYXVsdFRpbWV6b25lKTtcbiAgICB9XG4gIH1cblxuICBhcmVhU2VsZWN0ZWQodGltZXpvbmUpIHtcbiAgICB0aGlzLnRpbWV6b25lU2VydmljZS5zZXRUaW1lem9uZVNlbGVjdGVkKHRpbWV6b25lKTtcbiAgICB0aGlzLnRpbWV6b25lU2VsZWN0ZWQuZW1pdCh0aW1lem9uZSk7XG4gIH1cblxuICBtb3VzZUVudGVyKHNlbGVjdGVkKSB7XG4gICAgdGhpcy50aW1lem9uZVNlcnZpY2UuaG92ZXJlZCA9IHNlbGVjdGVkO1xuICAgIHRoaXMuaG92ZXJDaGFuZ2VkLmVtaXQoc2VsZWN0ZWQpO1xuICAgIHRoaXMudGltZXpvbmVzLmZvckVhY2goKHRpbWV6b25lKSA9PiB7XG4gICAgICB0aW1lem9uZS5zYW1lT2Zmc2V0ID0gdGltZXpvbmUub2Zmc2V0ID09PSBzZWxlY3RlZC5vZmZzZXQ7XG4gICAgfSk7XG4gIH1cblxuICBtb3VzZUxlYXZlKHNlbGVjdGVkKSB7XG4gICAgdGhpcy50aW1lem9uZVNlcnZpY2UuaG92ZXJlZCA9IG51bGw7XG4gICAgdGhpcy5ob3ZlckNoYW5nZWQuZW1pdChudWxsKTtcbiAgICB0aGlzLnRpbWV6b25lcy5mb3JFYWNoKCh0aW1lem9uZSkgPT4ge1xuICAgICAgdGltZXpvbmUuc2FtZU9mZnNldCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=