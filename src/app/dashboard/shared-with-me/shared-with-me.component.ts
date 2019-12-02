import { Component, OnInit } from '@angular/core';
import { PollsService } from 'src/app/polls/polls.service';
import { Poll } from 'src/app/polls/models/poll.model';

@Component({
  selector: 'app-shared-with-me',
  templateUrl: './shared-with-me.component.html',
  styleUrls: ['./shared-with-me.component.scss']
})
export class SharedWithMeComponent implements OnInit {

  polls: Poll[];

  constructor(private _pollsService: PollsService) {
    this._pollsService.getSharedPolls().subscribe(result => {
      this.polls = result;
    });
  }

  ngOnInit() {
  }

}
