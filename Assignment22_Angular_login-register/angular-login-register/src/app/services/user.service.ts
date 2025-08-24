import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  login(email: string, password: string): Observable<boolean> {
    const found = this.users.find(user => user.email === email && user.password === password);
    return of(!!found);
  }

  register(user: User): Observable<boolean> {
    const exists = this.users.find(u => u.email === user.email);
    if (exists) {
      return of(false);
    }
    this.users.push(user);
    return of(true);
  }
}
