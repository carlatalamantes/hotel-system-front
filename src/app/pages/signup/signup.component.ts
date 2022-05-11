import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isError: Boolean = false;
  showAlert: Boolean = false;
  message: String = '';

  constructor(private fb: FormBuilder, private userService: UserService,private router:Router) {
    this.signupForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        first_lastname: ['', [Validators.required]],
        cellphone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.matchPasswords.bind(this),
      }
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      const {
        name,
        first_lastname,
        second_lastname,
        cellphone,
        email,
        password,
      } = this.signupForm.getRawValue();
      this.userService
        .signup({
          name,
          first_lastname,
          second_lastname,
          cellphone,
          email,
          password,
        })
        .subscribe({
          complete: () => {
            this.isError = false;
            this.message = 'User was registered successfully';
            this.showAlert = true;
            this.signupForm.reset();
          },
          error: (err) => {
            this.isError = true;
            this.message = err.error.message;
            this.showAlert = true;
          },
        });
    }
  }

  //Custom validator
  matchPasswords() {
    if (!this.signupForm) return;
    const { password, confirmPassword } = this.signupForm.getRawValue();
    if (password === confirmPassword) {
      return null;
    } else {
      return { passwordMismatch: true };
    }
  }

  signupGoogle() {
   window.location.href="http://localhost:3001/google/auth";
  }
}
