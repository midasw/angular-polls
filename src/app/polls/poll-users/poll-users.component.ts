import { Component, OnInit } from '@angular/core';
import { PollsService } from '../polls.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll-users',
  templateUrl: './poll-users.component.html',
  styleUrls: ['./poll-users.component.scss']
})
export class PollUsersComponent implements OnInit {
  pollID: number;

  constructor(private route: ActivatedRoute, private _pollService: PollsService) {  }

  ngOnInit() {
    this.pollID = Number(this.route.snapshot.paramMap.get("id"));
    this._pollService.getPollUsers(this.pollID).subscribe(result =>
    {
      console.log(result);
    });
  }

}
