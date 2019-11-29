import { Injectable } from '@angular/core';
import { Friend } from './models/friend.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../security/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  addFriend(email: string): Observable<User> {
    return this.http.post<User>("https://localhost:44345/api/Friend/" + email, null);
  }

  getFriendRequests(): Observable<User[]> {
    return this.http.get<User[]>("https://localhost:44345/api/Friend/requests");
  }
}
