import { TestBed } from '@angular/core/testing';

import { CanActivateAlreadyLoggedGuard } from './can-activate-already-logged.guard';

describe('CanActivateAlreadyLoggedGuard', () => {
  let guard: CanActivateAlreadyLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateAlreadyLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
