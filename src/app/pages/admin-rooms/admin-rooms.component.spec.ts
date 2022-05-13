import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminRoomsComponent } from './admin-rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AdminRoomsComponent', () => {
  let component: AdminRoomsComponent;
  let fixture: ComponentFixture<AdminRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomsComponent ],
      imports:[ReactiveFormsModule,FormsModule,HttpClientTestingModule,RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form is invalid when fields are empty', () => {
    component.roomForm.controls['name'].setValue('')
    component.roomForm.controls['building'].setValue('')
    component.roomForm.controls['exterior_number'].setValue('')
    component.roomForm.controls['bed_count'].setValue('')
    component.roomForm.controls['guest_count'].setValue('')
    component.roomForm.controls['services'].setValue([])
    component.roomForm.controls['nightly_price'].setValue('')
    expect(component.roomForm.valid).toBeFalsy();
  });

  it('form is valid when fields are filled', () => {
    component.roomForm.controls['name'].setValue('ROOM 1')
    component.roomForm.controls['building'].setValue('BUILDING 1')
    component.roomForm.controls['exterior_number'].setValue('12')
    component.roomForm.controls['bed_count'].setValue(2)
    component.roomForm.controls['guest_count'].setValue(2)
    setTimeout(() => {
      component.roomForm.controls['services'].setValue(['kitchen'])

   }, );
  
    component.roomForm.controls['nightly_price'].setValue(2500)
    expect(component.roomForm.valid).toBeTruthy();
  });

  it('should render title in a h1 tag',(() => {
    const fixture = TestBed.createComponent(AdminRoomsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('ROOMS');
 }));
});
