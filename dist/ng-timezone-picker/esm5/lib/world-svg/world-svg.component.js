import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { TimezonePickerService } from '../timezone-picker.service';
var WorldSvgComponent = /** @class */ (function () {
    function WorldSvgComponent(timezoneService) {
        this.timezoneService = timezoneService;
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
    };
    WorldSvgComponent.prototype.areaSelected = function (timezone) {
        this.timezones.some(function (timezone) {
            if (timezone.selected === true) {
                timezone.selected = false;
                return true;
            }
            return false;
        });
        timezone.selected = true;
    };
    WorldSvgComponent.prototype.mouseEnter = function (selected) {
        this.timezones.forEach(function (timezone) {
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
    };
    WorldSvgComponent.prototype.mouseLeave = function (selected) {
        this.timezones.forEach(function (timezone) {
            timezone.sameOffset = timezone.offset !== selected.offset;
        });
        /*
          this.$el.find('.hover-text p').removeClass('active').text('');
         */
    };
    WorldSvgComponent.ctorParameters = function () { return [
        { type: TimezonePickerService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], WorldSvgComponent.prototype, "width", void 0);
    tslib_1.__decorate([
        Input()
    ], WorldSvgComponent.prototype, "height", void 0);
    WorldSvgComponent = tslib_1.__decorate([
        Component({
            selector: 'cth-world-svg',
            template: "<svg:svg xmlns:svg=\"http://www.w3.org/2000/svg\" class=\"timezone-map\" [attr.viewBox]=\"viewBox\">\n  <!--<polygon\n    *ngFor=\"let timezoneArea of timezones\"\n    [attr.points]=\"timezoneArea.points\"\n    (click)=\"areaSelected(timezoneArea)\"\n    (mouseenter)=\"mouseEnter(timezoneArea)\"\n    [ngClass]=\"{active: timezoneArea.selected, offset: timezoneArea.sameOffset}\"\n    [attr.data-foo]=\"timezoneArea.zonename\"\n  ></polygon>-->\n  <svg:path *ngFor=\"let timezoneArea of timezones\"\n         [attr.d]=\"timezoneArea.points\"\n         (click)=\"areaSelected(timezoneArea)\"\n         (mouseenter)=\"mouseEnter(timezoneArea)\"\n         [ngClass]=\"{active: timezoneArea.selected, offset: timezoneArea.sameOffset}\"/>\n</svg:svg>\n",
            styles: ["body.example{background-color:#9ddaf8}.timezone-map path{fill:#262626}.timezone-map path.active{fill:orange}.timezone-map path.offset{fill:#9ddaf8}.timezone-map path:hover{fill:orange;cursor:pointer}.filter-box>*{float:left;height:24px}.filter-box select{width:45%;padding:0 0 0 10px}.filter-box .quick-link{width:52%;overflow-x:auto;white-space:nowrap;overflow-y:hidden}.filter-box .quick-link span{font-weight:300;border-radius:3px;color:#000;background-color:#fff;border:1px solid #000;margin-left:10px;font-size:9px;padding:4px 6px}.filter-box .quick-link span.active{color:#fff;background-color:orange}.filter-box .quick-link span:hover{color:#fff;background-color:orange;cursor:pointer}.filter-box .hover-text{height:20px;width:100%;padding:10px}.filter-box .hover-text p{opacity:0;text-align:center;transform:scale(10);transition:.3s ease-in-out .2s}.filter-box .hover-text p.active{opacity:1;transform:scale(1);transition:.3s ease-in-out .1s}"]
        })
    ], WorldSvgComponent);
    return WorldSvgComponent;
}());
export { WorldSvgComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ybGQtc3ZnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXRpbWV6b25lLXBpY2tlci8iLCJzb3VyY2VzIjpbImxpYi93b3JsZC1zdmcvd29ybGQtc3ZnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFPakU7SUFVRSwyQkFBb0IsZUFBc0M7UUFBdEMsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzlELENBQUM7SUFORCxzQkFBVyxzQ0FBTzthQUFsQjtZQUNFLE9BQU8sVUFBTyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBRSxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBTUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsUUFBUTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDOUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxRQUFRO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUM5QixRQUFRLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNILGtDQUFrQztRQUNsQzs7Ozs7Ozs7Ozs7V0FXRztJQUNMLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsUUFBUTtRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDOUIsUUFBUSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDSDs7V0FFRztJQUNMLENBQUM7O2dCQTdDb0MscUJBQXFCOztJQVBqRDtRQUFSLEtBQUssRUFBRTtvREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7cURBQXVCO0lBSnBCLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qix3dkJBQXlDOztTQUUxQyxDQUFDO09BQ1csaUJBQWlCLENBd0Q3QjtJQUFELHdCQUFDO0NBQUEsQUF4REQsSUF3REM7U0F4RFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaW1lem9uZX0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtUaW1lem9uZVBpY2tlclNlcnZpY2V9IGZyb20gJy4uL3RpbWV6b25lLXBpY2tlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3RoLXdvcmxkLXN2ZycsXG4gIHRlbXBsYXRlVXJsOiAnLi93b3JsZC1zdmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93b3JsZC1zdmcuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXb3JsZFN2Z0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHRpbWV6b25lczogQXJyYXk8VGltZXpvbmU+O1xuICBASW5wdXQoKSBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBnZXQgdmlld0JveCgpIHtcbiAgICByZXR1cm4gYDAgMCAke3RoaXMud2lkdGggfHwgMH0gJHt0aGlzLmhlaWdodCB8fCAwfWA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWV6b25lU2VydmljZTogVGltZXpvbmVQaWNrZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy50aW1lem9uZXMgPSB0aGlzLnRpbWV6b25lU2VydmljZS5nZXRGdWxsVGltZXpvbmVMaXN0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGFyZWFTZWxlY3RlZCh0aW1lem9uZSkge1xuICAgIHRoaXMudGltZXpvbmVzLnNvbWUoKHRpbWV6b25lKSA9PiB7XG4gICAgICBpZiAodGltZXpvbmUuc2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgdGltZXpvbmUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aW1lem9uZS5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBtb3VzZUVudGVyKHNlbGVjdGVkKSB7XG4gICAgdGhpcy50aW1lem9uZXMuZm9yRWFjaCgodGltZXpvbmUpID0+IHtcbiAgICAgIHRpbWV6b25lLnNhbWVPZmZzZXQgPSB0aW1lem9uZS5vZmZzZXQgPT09IHNlbGVjdGVkLm9mZnNldDtcbiAgICB9KTtcbiAgICAvKiBPbmx5IGlmIGhvdmVyIHRleHQgdHVybmVkIG9uICovXG4gICAgLypcbiAgICAgIHZhciBlbCA9IG51bGwsXG4gICAgICAgIGRhdGEgPSAkKGUudGFyZ2V0KS5kYXRhKCksXG4gICAgICAgIGhvdmVyS2V5ID0gb3B0aW9ucy5tYXBIb3ZlclR5cGUsXG4gICAgICAgIGhvdmVyVGV4dCA9IG9wdGlvbnMuaG92ZXJUZXh0O1xuICAgICAgaWYgKGhvdmVyS2V5KSB7XG4gICAgICAgIGVsID0gJCgnLnRpbWV6b25lLW1hcCBwb2x5Z29uW2RhdGEtJyArIGhvdmVyS2V5ICsgJz1cIicgKyBkYXRhW2hvdmVyS2V5XSArICdcIl0nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgfVxuICAgICAgdGhpcy4kZWwuZmluZCgnLmhvdmVyLXRleHQgcCcpLmFkZENsYXNzKCdhY3RpdmUnKS50ZXh0KGhvdmVyVGV4dCAmJiBob3ZlclRleHQgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGhvdmVyVGV4dChlLCBkYXRhKSA6IChkYXRhLnRpbWV6b25lICsgXCIgKFwiICsgZGF0YS56b25lbmFtZSArIFwiKVwiKSk7XG4gICAgICovXG4gIH1cblxuICBtb3VzZUxlYXZlKHNlbGVjdGVkKSB7XG4gICAgdGhpcy50aW1lem9uZXMuZm9yRWFjaCgodGltZXpvbmUpID0+IHtcbiAgICAgIHRpbWV6b25lLnNhbWVPZmZzZXQgPSB0aW1lem9uZS5vZmZzZXQgIT09IHNlbGVjdGVkLm9mZnNldDtcbiAgICB9KTtcbiAgICAvKlxuICAgICAgdGhpcy4kZWwuZmluZCgnLmhvdmVyLXRleHQgcCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS50ZXh0KCcnKTtcbiAgICAgKi9cbiAgfVxufVxuIl19