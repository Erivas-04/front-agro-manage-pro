import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from 'src/app/interfaces/Response/user';

@Injectable({
  providedIn: 'root'
})
export class UserSelectService {
  user: User;

  constructor() {
  }

  setUser(username: string): void {
    this.user.username = username;
    console.log(this.user)
  }
}
