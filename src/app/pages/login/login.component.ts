import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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

  constructor(private fb: FormBuilder, private UserService: UserService,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.getRawValue();
      this.UserService.login(data).subscribe({
        next: (response) => {  
          this.UserService.setToken(response.token)
          this.router.navigateByUrl("/profile")

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

  loginGoogle(){
    window.location.href="http://localhost:3001/google/auth";
  }
}
