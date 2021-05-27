import { TestBed } from '@angular/core/testing';

import { SendDateService } from './send-date.service';

describe('SendDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendDateService = TestBed.get(SendDateService);
    expect(service).toBeTruthy();
  });
});
