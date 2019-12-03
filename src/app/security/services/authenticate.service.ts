import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLogin } from '../models/user-login.model';
import { UserRegister } from '../models/user-register.model';
import { UserRegisterInvitee } from '../models/user-register-invitee.model';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  isLoggedin = new BehaviorSubject(localStorage.getItem('token') ? true : false);

  constructor(private _httpClient: HttpClient) { }

  getUserID() {
    return +localStorage.getItem("userID");
  }

  getUsername() {
    return localStorage.getItem("username");
  }

  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44345/api/User/authenticate", userLogin);
  }

  register(userRegister: UserRegister): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44345/api/User/register", userRegister);
  }

  registerInvitee(userRegisterInvitee: UserRegisterInvitee): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44345/api/User/register-invitee", userRegisterInvitee);
  }

  activate(guid: string): Observable<User> {
    return this._httpClient.get<User>("https://localhost:44345/api/User/activate/" + guid);
  }
}
