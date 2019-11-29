import { Component, OnInit } from '@angular/core';
import { PollsService } from '../polls.service';
import { ActivatedRoute } from '@angular/router';
import { GetPollDto } from '../models/get-poll-dto.model';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/security/services/authenticate.service';
import { PollAnswer } from '../models/poll-answer.model';
import { PollVote } from '../models/poll-vote.model';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {

poll: GetPollDto;
  //poll: Observable<GetPollDto>;
  userID: number;
  pollID: number;

  constructor(private route: ActivatedRoute, private _pollsService: PollsService, private _authService: AuthenticateService) {
    this.userID = this._authService.getUserID();
  }

  onCheckBoxChange(value) {
    console.log(value);
  }

  getPoll() {
    this._pollsService.getPoll(this.pollID).subscribe(p => {
      this.poll = p;
    })
  }

  ngOnInit() {
    this.pollID = Number(this.route.snapshot.paramMap.get("id"));
    this.getPoll();
  }

  isChecked(a: PollAnswer) {
    return a.votes.some(v => v.user.userID === this.userID);
  }

  getVoters(a: PollAnswer) {
    let tipText = '';
    a.votes.forEach(v => {
      tipText += v.user.name + '\n';
    })
    return tipText;
  }

  vote(a: PollAnswer, $event: any) {
    $event.preventDefault();

    if ($event.target.checked)
    {
      let vote = new PollVote(0, a.answerID, this.userID);
      console.log(vote);
      this._pollsService.addVote(vote).subscribe(result => {
        this.getPoll();
      });
    }
    else
    {
      let vote = a.votes.find(v => v.user.userID === this.userID);
      this._pollsService.deleteVote(vote.voteID).subscribe(result => {
        this.getPoll();
      });
    }
  }
}
