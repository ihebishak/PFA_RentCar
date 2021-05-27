import { TestBed } from '@angular/core/testing';

import { GetCarsService } from './get-cars.service';

describe('GetCarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCarsService = TestBed.get(GetCarsService);
    expect(service).toBeTruthy();
  });
});
