import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  profileForm: FormGroup | undefined;

  ngOnInit(): void {
    const firstName = new FormControl(this.authService.currentUser?.firstName);
    const lastName = new FormControl(this.authService.currentUser?.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(value: any) {
    this.authService.updateCurrentUser(value.firstName, value.lastName);
    this.router.navigate(['events']);
  }
}
