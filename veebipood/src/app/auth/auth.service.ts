import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { FirebaseResponse } from './firebase-response';
import { FirebaseError } from './firebase-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject(sessionStorage.getItem("token") === "123");
  private signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + environment.firebase_api_key;
  private loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + environment.firebase_api_key;


  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    const headers = {
       "Content-Type": "application/json"
    }
    return this.http.post<FirebaseResponse>(this.signUpUrl, payload, {headers: headers});
  }

  login(email: string, password: string) {
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    const headers = {
       "Content-Type": "application/json"
    }
    return this.http.post<FirebaseResponse>(this.loginUrl, payload, {headers: headers});
  }
}
