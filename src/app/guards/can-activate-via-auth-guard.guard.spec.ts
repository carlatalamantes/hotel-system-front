import { TestBed } from '@angular/core/testing';

import { CanActivateViaAuthGuardGuard } from './can-activate-via-auth-guard.guard';

describe('CanActivateViaAuthGuardGuard', () => {
  let guard: CanActivateViaAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateViaAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
