import { TestBed } from '@angular/core/testing';

import { AdminloggedService } from './adminlogged.service';

describe('AdminloggedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminloggedService = TestBed.get(AdminloggedService);
    expect(service).toBeTruthy();
  });
});
