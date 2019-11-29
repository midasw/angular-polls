import { Component, OnInit } from '@angular/core';

import { PollsService } from '../../polls/polls.service'

import { Poll } from '../../polls/models/poll.model'

@Component({
  selector: 'app-my-polls',
  templateUrl: './my-polls.component.html',
  styleUrls: ['./my-polls.component.scss']
})
export class MyPollsComponent implements OnInit {

  polls: Poll[];

  constructor(private _pollsService: PollsService) {
    this._pollsService.getPolls().subscribe(result => {
      this.polls = result;
    });
  }

  ngOnInit() {
  }

}
