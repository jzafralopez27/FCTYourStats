import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }

  login(): void {
    if (this.username && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}