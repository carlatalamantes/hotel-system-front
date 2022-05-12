import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomsDetailComponent } from './admin-rooms-detail.component';

describe('AdminRoomsDetailComponent', () => {
  let component: AdminRoomsDetailComponent;
  let fixture: ComponentFixture<AdminRoomsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
