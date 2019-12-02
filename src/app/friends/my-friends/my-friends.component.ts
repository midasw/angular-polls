import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service';
import { GetUserDto } from '../models/get-user-dto.model';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.scss']
})
export class MyFriendsComponent implements OnInit {

  friends: GetUserDto[];

  constructor(private _friendsService: FriendsService) {
    _friendsService.getFriends().subscribe(result =>{
      this.friends = result;
    });
  }

  ngOnInit() {
  }

}
