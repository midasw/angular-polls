import { GetUserDto } from 'src/app/friends/models/get-user-dto.model';

export class GetPollVoteDto {
    constructor(public voteID: number, public answerID: number, public user: GetUserDto){
    }
}
