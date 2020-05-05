import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneNgSelectPickerComponent } from './timezone-ng-select-picker.component';

describe('TimezoneMapPickerComponent', () => {
  let component: TimezoneNgSelectPickerComponent;
  let fixture: ComponentFixture<TimezoneNgSelectPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezoneNgSelectPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneNgSelectPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
