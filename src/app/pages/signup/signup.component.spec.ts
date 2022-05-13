import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports:[ReactiveFormsModule,FormsModule,HttpClientTestingModule,      RouterTestingModule.withRoutes([]),
    ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form is invalid when fields are empty', () => {
    component.signupForm.controls['name'].setValue('')
    component.signupForm.controls['first_lastname'].setValue('')
    component.signupForm.controls['cellphone'].setValue('')
    component.signupForm.controls['email'].setValue('')
    component.signupForm.controls['confirmPassword'].setValue('')
    component.signupForm.controls['password'].setValue('')
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('form is valid when fields are filled', () => {
    component.signupForm.controls['name'].setValue('Carla')
    component.signupForm.controls['first_lastname'].setValue('Talamants')
    component.signupForm.controls['cellphone'].setValue('3311522407')
    component.signupForm.controls['email'].setValue('carla@gmail.com')
    component.signupForm.controls['confirmPassword'].setValue('Admin')
    component.signupForm.controls['password'].setValue('Admin')
    expect(component.signupForm.valid).toBeTruthy();
  });

  it('should render title in a h1 tag',(() => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('SERENDIPIA');
 }));
  
});
