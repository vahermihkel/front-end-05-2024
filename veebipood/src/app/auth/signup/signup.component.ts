import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseResponse } from '../firebase-response';
import { FirebaseError } from '../firebase-error';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  message = "";

  constructor(private authService: AuthService) {}

  signup(signupForm: NgForm) {
    if (signupForm.value.password !== signupForm.value.repeatpassword) {
      this.message = "Paroolid ei ühti";
      return;
    }

    console.log(signupForm.value.gridcheck);
    if (!signupForm.value.gridcheck) {
      this.message = "Tingimustega pole nõustutud";
      return;
    }

    this.authService.signup(signupForm.value.email, signupForm.value.password).subscribe({
      next: (result: FirebaseResponse) => {
        console.log(result);
        this.message = "Edukalt registreerutud";
        signupForm.reset();
      },
      error: (result: FirebaseError) => {
        console.log(result);
        this.message = result.error.error.message;
      }
    });
  }
}
