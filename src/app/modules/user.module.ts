import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent, ProfileComponent } from '../components';
import { userRoutes } from '../routes/userRoutes';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
