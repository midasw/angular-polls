import { PollVote } from './poll-vote.model';
import { GetPollVoteDto } from './get-poll-vote-dto.model';

export class PollAnswer {
    constructor(public answerID: number, public answer: string, public votes: GetPollVoteDto[]){
    }
}
