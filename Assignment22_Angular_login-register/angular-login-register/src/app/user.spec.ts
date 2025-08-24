import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    const data = localStorage.getItem('users');
    if (data) {
      this.users = JSON.parse(data);
    }
  }

  register(user: User): void {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(username: string, password: string): boolean {
    return this.users.some(u => u.username === username && u.password === password);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
