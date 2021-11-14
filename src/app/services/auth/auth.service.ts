import { Injectable } from '@angular/core';
import { IUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  currentUser: IUser | undefined;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: 'adamako',
      firstName: 'Adama',
      lastName: 'KO',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
