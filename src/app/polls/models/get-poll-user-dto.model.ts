import { GetUserDto } from 'src/app/friends/models/get-user-dto.model';

export class GetPollUserDto {
    constructor(public pollUserID: number, public isOwner: boolean, public user: GetUserDto, public pollID: number){
    }
}
