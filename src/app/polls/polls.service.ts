import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Poll } from './models/poll.model';
import { CreatePollDto } from './models/create-poll-dto.model';
import { GetPollDto } from './models/get-poll-dto.model';
import { PollVote } from './models/poll-vote.model';
import { PollUser } from './models/poll-user.model';
import { GetPollUserDto } from './models/get-poll-user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(private http: HttpClient) { }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>("https://localhost:44345/api/Poll");
  }

  getSharedPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>("https://localhost:44345/api/Poll/shared");
  }

  createPoll(dto: CreatePollDto): Observable<GetPollDto> {
    return this.http.post<GetPollDto>("https://localhost:44345/api/Poll", dto);
  }

  getPoll(pollID: number): Observable<GetPollDto> {
    return this.http.get<GetPollDto>("https://localhost:44345/api/Poll/" + pollID);
  }

  addVote(pollVote: PollVote): Observable<PollVote> {
    return this.http.post<PollVote>("https://localhost:44345/api/PollVote", pollVote);
  }

  deleteVote(voteID: number): Observable<PollVote> {
    return this.http.delete<PollVote>("https://localhost:44345/api/PollVote/" + voteID);
  }

  getPollUsers(pollID: number): Observable<GetPollUserDto[]> {
    return this.http.get<GetPollUserDto[]>("https://localhost:44345/api/PollUser/" + pollID);
  }

  addPollUser(pollUser: PollUser): Observable<PollUser> {
    return this.http.post<PollUser>("https://localhost:44345/api/PollUser", pollUser);
  }
}
