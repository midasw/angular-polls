import { Component, OnInit } from '@angular/core';
import { PollsService } from '../polls.service';
import { ActivatedRoute } from '@angular/router';
import { GetPollDto } from '../models/get-poll-dto.model';
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
  userID: number;
  pollID: number;
  numTotalVotes: number;

  constructor(private _route: ActivatedRoute, private _pollsService: PollsService, private _authService: AuthenticateService) {
    this.userID = this._authService.getUserID();
  }

  getPoll() {
    this._pollsService.getPoll(this.pollID).subscribe(p => {
      this.poll = p;

      this.numTotalVotes = 0;
      p.answers.forEach((a, i) => {
        this.numTotalVotes += a.votes.length;
      })
    })
  }

  ngOnInit() {
    this.pollID = Number(this._route.snapshot.paramMap.get("id"));
    this.getPoll();
  }

  isChecked(a: PollAnswer) {
    return a.votes.some(v => v.user.userID === this.userID);
  }

  getBarLength(a: PollAnswer) {
    if (this.numTotalVotes)
      return a.votes.length / this.numTotalVotes * 100 + "%";
    return 0;
  }

  getVoters(a: PollAnswer) {
    let tipText = '';
    a.votes.forEach(v => {
      tipText += v.user.name + '\r\n';
    })
    return tipText;
  }

  vote(a: PollAnswer, $event: any) {
    if ($event.checked)
    {
      let vote = new PollVote(0, a.answerID, this.userID);
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
