import { PollAnswer } from './poll-answer.model';

export class GetPollDto {
    constructor(public pollID: number, public name: string, public answers: PollAnswer[]){
    }
}
