import { TestBed } from '@angular/core/testing';

import { CanActivateAdminGuard } from './can-activate-admin.guard';

describe('CanActivateAdminGuard', () => {
  let guard: CanActivateAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
