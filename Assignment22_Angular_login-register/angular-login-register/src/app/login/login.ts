import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: false
})
export class LoginComponent {
  email = '';
  password = '';
  message = ''; 

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.login(this.email, this.password).subscribe((result) => {
      if (result) {
        this.message = 'Login successful!';
      } else {
        this.message = 'Invalid credentials!';
      }
    });
  }
}