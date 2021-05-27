import { TestBed, async, inject } from '@angular/core/testing';

import { PaymentGuardGuard } from './payment-guard.guard';

describe('PaymentGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentGuardGuard]
    });
  });

  it('should ...', inject([PaymentGuardGuard], (guard: PaymentGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
