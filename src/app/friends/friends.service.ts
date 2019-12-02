import { Injectable } from '@angular/core';
import { GetFriendDto } from './models/get-friend-dto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../security/models/user.model';
import { Friend } from './models/friend.model';
import { GetUserDto } from './models/get-user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  getFriends(): Observable<GetUserDto[]> {
    return this.http.get<GetUserDto[]>("https://localhost:44345/api/Friend");
  }

  addFriend(email: string): Observable<User> {
    return this.http.post<User>("https://localhost:44345/api/Friend/" + email, null);
  }

  getFriendRequests(): Observable<GetFriendDto[]> {
    return this.http.get<GetFriendDto[]>("https://localhost:44345/api/Friend/requests");
  }

  updateFriend(friendID: number, friend: Friend) {
    return this.http.put<Friend>("https://localhost:44345/api/Friend/" + friendID, friend);
  }

  deleteFriend(friendID: number) {
    return this.http.delete<Friend>("https://localhost:44345/api/Friend/" + friendID);
  }
}
