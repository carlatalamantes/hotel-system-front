import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showError: Boolean = false;
  showSuccess: Boolean = false;
  message: String = '';

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.getRawValue();
      this.loginService.login(data).subscribe({
        complete: () => {
          this.showSuccess = true;
          this.message = 'User was successfully logged';
        },
        error: (err) => {
          console.log(err.error.message);
          this.showError = true;
          this.message = err.error.message;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
