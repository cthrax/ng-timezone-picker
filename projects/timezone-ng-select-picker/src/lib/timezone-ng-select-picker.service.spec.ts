import { TestBed } from '@angular/core/testing';

import { TimezoneNgSelectPickerService } from './timezone-ng-select-picker.service';

describe('TimezoneMapPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimezoneNgSelectPickerService = TestBed.get(TimezoneNgSelectPickerService);
    expect(service).toBeTruthy();
  });
});
