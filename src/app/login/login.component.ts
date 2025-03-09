import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private Http: HttpClient, private router: Router) {

  }

  user = { username: '', password: '' }
  userData: any;
  Token: string = '';

  login() {
    this.Http.post(
      'https://dummyjson.com/auth/login',
      this.user,  // No need for JSON.stringify
      { headers: { 'Content-Type': 'application/json' } } // Add headers
    ).subscribe({
      next: (value) => {
        console.log(value);
        this.userData = value;
        this.Token = this.userData?.accessToken;
        debugger;
        if (this.Token != '') {
          localStorage.setItem('auth', 'true');
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log(err);
        localStorage.setItem('auth', 'false');
      },
    });
  }


}
