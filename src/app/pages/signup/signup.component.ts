import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm: any;
  
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

     this.signupForm = this.fb.group({
      name:['', [Validators.required]],
      first_lastname: ['', [Validators.required]],
      second_lastname: ['', [Validators.required]],
      cellphone: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }

  onSubmit() {

    console.log(this.signupForm.value);

  }


}
