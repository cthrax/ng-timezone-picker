import { TestBed } from '@angular/core/testing';

import { TimezonePickerService } from './timezone-picker.service';

describe('NgTimezonePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimezonePickerService = TestBed.get(TimezonePickerService);
    expect(service).toBeTruthy();
  });

  describe('Ensure binary search works correctly', () => {
    beforeEach(() => {
    })
  })

  function expected(service, expectedResult) {
    const found = service.findTimezone('timezone', expectedResult);
    expect(found).not.toBeNull();
    expect('' + found.timezone).toEqual('' + expectedResult);
  }

  it('should find ', () => {
    const service = TestBed.get(TimezonePickerService);
    const test = [];
    for (let x=0; x < 1000; x++) {
      test.push({timezone: x});
    }
    service.timezones = test;
    expected(service, 0);
    expected(service, 999);
    expected(service, 499);
    expected(service, 1);
    expected(service, 998);

    const found = service.findTimezone('timezone', 1000);
    expect(found).toBeNull();
  })
});
