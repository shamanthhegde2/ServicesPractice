import { TestBed } from '@angular/core/testing';

import { ArrayUtilityService } from './array-utility.service';

describe('ArrayUtilityService', () => {
  let service: ArrayUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
