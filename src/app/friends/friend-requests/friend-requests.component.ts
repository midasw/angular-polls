import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { GetUserDto } from '../models/get-user-dto.model';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss']
})
export class FriendRequestsComponent implements OnInit {

  friendRequests: GetUserDto[];

  constructor(private _friendsService: FriendsService) {
    _friendsService.getFriendRequests().subscribe(result => {
      console.log(result);
      this.friendRequests = result;
    });
  }

  ngOnInit() {
  }

}
