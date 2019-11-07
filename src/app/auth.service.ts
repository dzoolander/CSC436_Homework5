import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean;

  constructor() { }

  login(user: string, password: string): void {
    if (user === 'chandlergegg@gmail.com' && password === 'csc436!') {
      this.loggedIn = true;
    }
      this.loggedIn = false;
  }

  isLoggedIn (): boolean {
    return this.loggedIn;
  }
}
