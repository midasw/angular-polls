import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { GetFriendDto } from '../models/get-friend-dto.model';
import { Friend } from '../models/friend.model';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss']
})
export class FriendRequestsComponent implements OnInit {

  friendRequests: GetFriendDto[];

  constructor(private _friendsService: FriendsService) {
    this.getFriendRequests();
  }

  getFriendRequests() {
    this._friendsService.getFriendRequests().subscribe(result => {
      this.friendRequests = result;
    });
  }

  accept(dto: GetFriendDto) {
    let friend = new Friend(dto.friendID, dto.sender.userID, dto.receiver.userID, "Accepted");
    this._friendsService.updateFriend(dto.friendID, friend).subscribe(result =>{
      this.getFriendRequests();
    });
  }

  remove(dto: GetFriendDto) {
    this._friendsService.deleteFriend(dto.friendID).subscribe(result =>{
      this.getFriendRequests();
    })
  }

  ngOnInit() {
  }

}
