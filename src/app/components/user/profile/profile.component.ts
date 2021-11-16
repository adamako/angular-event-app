import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  lastName: FormControl | undefined;
  firstName: FormControl | undefined;

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser?.firstName,
      Validators.required
    );
    this.lastName = new FormControl(
      this.authService.currentUser?.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateLastName() {
    return this.lastName?.valid || this.lastName?.untouched;
  }

  validateFirstName() {
    return this.firstName?.value || this.firstName?.untouched;
  }

  saveProfile(value: any) {
    if (this.profileForm?.valid) {
      this.authService.updateCurrentUser(value.firstName, value.lastName);
      this.router.navigate(['events']);
    }
  }
}
