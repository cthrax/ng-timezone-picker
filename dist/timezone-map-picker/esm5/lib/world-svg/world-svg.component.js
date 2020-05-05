import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimezoneMapPickerService } from '../timezone-map-picker.service';
var WorldSvgComponent = /** @class */ (function () {
    function WorldSvgComponent(timezoneService) {
        this.timezoneService = timezoneService;
        this.timezoneSelected = new EventEmitter();
        this.hoverChanged = new EventEmitter();
        this.timezones = this.timezoneService.getFullTimezoneList();
    }
    Object.defineProperty(WorldSvgComponent.prototype, "viewBox", {
        get: function () {
            return "0 0 " + (this.width || 0) + " " + (this.height || 0);
        },
        enumerable: true,
        configurable: true
    });
    WorldSvgComponent.prototype.ngOnInit = function () {
        if (!!this.defaultTimezone) {
            this.timezoneService.setTimezoneByKey(this.defaultTimezone);
        }
    };
    WorldSvgComponent.prototype.areaSelected = function (timezone) {
        this.timezoneService.setTimezoneSelected(timezone);
        this.timezoneSelected.emit(timezone);
    };
    WorldSvgComponent.prototype.mouseEnter = function (selected) {
        this.timezoneService.hovered = selected;
        this.hoverChanged.emit(selected);
        this.timezones.forEach(function (timezone) {
            timezone.sameOffset = timezone.offset === selected.offset;
        });
    };
    WorldSvgComponent.prototype.mouseLeave = function (selected) {
        this.timezoneService.hovered = null;
        this.hoverChanged.emit(null);
        this.timezones.forEach(function (timezone) {
            timezone.sameOffset = false;
        });
    };
    WorldSvgComponent.ctorParameters = function () { return [
        { type: TimezoneMapPickerService }
    ]; };
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
    return WorldSvgComponent;
}());
export { WorldSvgComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ybGQtc3ZnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdGhyYXgvdGltZXpvbmUtbWFwLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi93b3JsZC1zdmcvd29ybGQtc3ZnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQVF4RTtJQWNFLDJCQUFvQixlQUF5QztRQUF6QyxvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7UUFQNUMscUJBQWdCLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDeEUsaUJBQVksR0FBMkIsSUFBSSxZQUFZLEVBQVksQ0FBQztRQU9uRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBTkQsc0JBQVcsc0NBQU87YUFBbEI7WUFDRSxPQUFPLFVBQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUUsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQU1ELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxRQUFRO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLFFBQVE7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUM5QixRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsUUFBUTtRQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQzlCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBN0JvQyx3QkFBd0I7O0lBWHBEO1FBQVIsS0FBSyxFQUFFO29EQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTtxREFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7OERBQWdDO0lBRTlCO1FBQVQsTUFBTSxFQUFFOytEQUFnRjtJQUMvRTtRQUFULE1BQU0sRUFBRTsyREFBNEU7SUFSMUUsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLG1kQUF5Qzs7U0FFMUMsQ0FBQztPQUNXLGlCQUFpQixDQTRDN0I7SUFBRCx3QkFBQztDQUFBLEFBNUNELElBNENDO1NBNUNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RpbWV6b25lTWFwUGlja2VyU2VydmljZX0gZnJvbSAnLi4vdGltZXpvbmUtbWFwLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7VGltZXpvbmV9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3RoLXdvcmxkLXN2ZycsXG4gIHRlbXBsYXRlVXJsOiAnLi93b3JsZC1zdmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93b3JsZC1zdmcuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXb3JsZFN2Z0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHRpbWV6b25lczogQXJyYXk8VGltZXpvbmU+O1xuICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdFRpbWV6b25lOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyB0aW1lem9uZVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8VGltZXpvbmU+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaW1lem9uZT4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBob3ZlckNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxUaW1lem9uZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbWV6b25lPigpO1xuXG4gIHB1YmxpYyBnZXQgdmlld0JveCgpIHtcbiAgICByZXR1cm4gYDAgMCAke3RoaXMud2lkdGggfHwgMH0gJHt0aGlzLmhlaWdodCB8fCAwfWA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWV6b25lU2VydmljZTogVGltZXpvbmVNYXBQaWNrZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy50aW1lem9uZXMgPSB0aGlzLnRpbWV6b25lU2VydmljZS5nZXRGdWxsVGltZXpvbmVMaXN0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoISF0aGlzLmRlZmF1bHRUaW1lem9uZSkge1xuICAgICAgdGhpcy50aW1lem9uZVNlcnZpY2Uuc2V0VGltZXpvbmVCeUtleSh0aGlzLmRlZmF1bHRUaW1lem9uZSk7XG4gICAgfVxuICB9XG5cbiAgYXJlYVNlbGVjdGVkKHRpbWV6b25lKSB7XG4gICAgdGhpcy50aW1lem9uZVNlcnZpY2Uuc2V0VGltZXpvbmVTZWxlY3RlZCh0aW1lem9uZSk7XG4gICAgdGhpcy50aW1lem9uZVNlbGVjdGVkLmVtaXQodGltZXpvbmUpO1xuICB9XG5cbiAgbW91c2VFbnRlcihzZWxlY3RlZCkge1xuICAgIHRoaXMudGltZXpvbmVTZXJ2aWNlLmhvdmVyZWQgPSBzZWxlY3RlZDtcbiAgICB0aGlzLmhvdmVyQ2hhbmdlZC5lbWl0KHNlbGVjdGVkKTtcbiAgICB0aGlzLnRpbWV6b25lcy5mb3JFYWNoKCh0aW1lem9uZSkgPT4ge1xuICAgICAgdGltZXpvbmUuc2FtZU9mZnNldCA9IHRpbWV6b25lLm9mZnNldCA9PT0gc2VsZWN0ZWQub2Zmc2V0O1xuICAgIH0pO1xuICB9XG5cbiAgbW91c2VMZWF2ZShzZWxlY3RlZCkge1xuICAgIHRoaXMudGltZXpvbmVTZXJ2aWNlLmhvdmVyZWQgPSBudWxsO1xuICAgIHRoaXMuaG92ZXJDaGFuZ2VkLmVtaXQobnVsbCk7XG4gICAgdGhpcy50aW1lem9uZXMuZm9yRWFjaCgodGltZXpvbmUpID0+IHtcbiAgICAgIHRpbWV6b25lLnNhbWVPZmZzZXQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuIl19