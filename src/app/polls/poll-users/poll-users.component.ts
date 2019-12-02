import { Component, OnInit } from '@angular/core';
import { PollsService } from '../polls.service';
import { ActivatedRoute } from '@angular/router';
import { FriendsService } from 'src/app/friends/friends.service';
import { GetPollUserDto } from '../models/get-poll-user-dto.model';
import { GetUserDto } from 'src/app/friends/models/get-user-dto.model';
import { PollUser } from '../models/poll-user.model';

@Component({
  selector: 'app-poll-users',
  templateUrl: './poll-users.component.html',
  styleUrls: ['./poll-users.component.scss']
})
export class PollUsersComponent implements OnInit {
  pollID: number;

  pollUsers: GetPollUserDto[];
  invitableFriends: GetUserDto[];

  constructor(private route: ActivatedRoute, private _pollService: PollsService, private _friendsService: FriendsService) {  }

  ngOnInit() {
    this.pollID = Number(this.route.snapshot.paramMap.get("id"));
    this.getPollUsers();
  }

  getPollUsers() {
    let pollUsers;

    this._pollService.getPollUsers(this.pollID).subscribe(result =>
    {
      pollUsers = result;
      this.pollUsers = pollUsers;

      this._friendsService.getFriends().subscribe(result =>
      {
        this.invitableFriends = result.filter(function(f){
          return pollUsers.filter(function(pu){
             return pu.user.userID == f.userID;
          }).length == 0
        });
      });
    });
  }

  invite(dto: GetUserDto) {
    let pu = new PollUser(0, dto.userID, this.pollID);
    this._pollService.addPollUser(pu).subscribe(result => {
      this.getPollUsers();
    });
  }
}
