import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneMapPickerComponent } from './timezone-map-picker.component';

describe('NgTimezonePickerComponent', () => {
  let component: TimezoneMapPickerComponent;
  let fixture: ComponentFixture<TimezoneMapPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezoneMapPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneMapPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
