import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Toastr, TOASTR_TOKEN } from '../../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

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
      this.toastr.success('Profile Saved');
      // this.router.navigate(['events']);
    }
  }
}
