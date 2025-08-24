import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  standalone: false
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  message = ''; // Add this line

  constructor(private userService: UserService) {}

  onSubmit() {
    const newUser: User = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.userService.register(newUser).subscribe((result) => {
      if (result) {
        this.message = 'Registration successful!';
      } else {
        this.message = 'User already exists!';
      }
    });
  }
}

