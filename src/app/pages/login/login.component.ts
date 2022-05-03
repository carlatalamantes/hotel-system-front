import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isError: Boolean = false;
  showAlert: Boolean = false;
  message: String = '';

  constructor(private fb: FormBuilder, private loginService: LoginService,private router:Router) {
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
        next: (response) => {  
          this.loginService.setToken(response.token)
          this.router.navigateByUrl("/rooms")

        },
        error: (err) => {
          this.isError = true;
          this.message = err.error.message;
          this.showAlert = true;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
