import { AuthenticationService } from './../servcies/authentication.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  errorMessage:string='';
  isLoading:boolean = false;
  constructor(private AuthenticationService:AuthenticationService,
    private _Router:Router) {}
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(7),
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/01[0125][0-9]{8}$/),
      ]),
    }
  );

  /*passwordsMatch() {
    let password = this.registerForm.get('password')?.value;
    let repassword = this.registerForm.get('rePassword')?.value;

    if (password !== repassword) {
      this.registerForm.setErrors({ passMatch: 'passwords dont match' });
    }
    return { passMatch: 'passwords dont match' };
  }*/

  handleRegister(registerForm: FormGroup) {
    this.isLoading = true;
    this.AuthenticationService.register(registerForm.value).subscribe({
      
      
      next: (res) => {
        if(res.message === 'success'){
          this.isLoading = false;
          this._Router.navigate(['/login'])
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error.errors.msg;
      }
    });
  }
}
