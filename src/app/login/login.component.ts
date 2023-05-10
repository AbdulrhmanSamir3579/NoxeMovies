import { Component } from '@angular/core';
import { AuthenticationService } from '../servcies/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _Router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  handleLogin(loginForm: FormGroup) {
    this.isLoading = true;
    this._AuthenticationService.login(loginForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.message === 'success') {
          localStorage.setItem('token', res.token);
          this._AuthenticationService.decodeUserData();
          this._Router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error.message;
      },
    });
  }
}
