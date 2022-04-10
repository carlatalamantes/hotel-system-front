import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  showError:Boolean=false;
  showSuccess:Boolean=false;
  message:String="";

  constructor(private fb: FormBuilder, private signupService: SignupService) { 
    this.signupForm = this.fb.group({
      name:['', [Validators.required]],
      first_lastname: ['', [Validators.required]],
      cellphone: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],

    }, {
      validators: this.matchPasswords.bind(this),
    });
  }


  ngOnInit(): void {

     

  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { name,first_lastname,second_lastname, cellphone, email,password } = this.signupForm.getRawValue();
      this.signupService.signup({name,first_lastname,second_lastname, cellphone, email,password}).subscribe( {
        complete: () => {
          this.showSuccess=true;
          this.message="User is logged";
         console.log("Logged")
        
    
        },
        error: (err) =>{
          this.showError=true;
          this.message=err.error.message;
          console.log(err.error.message)
        }
      });

    } else {
      console.log(this.signupForm.getRawValue())
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


}
