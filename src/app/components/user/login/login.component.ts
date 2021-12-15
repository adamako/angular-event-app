import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  password: string = '';
  userName: string = '';
  mouseoverLogin: boolean | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(values: { userName: string; password: string }) {
    this.authService.loginUser(values.userName, values.password);
    if (this.authService.isAuthenticated()) this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
