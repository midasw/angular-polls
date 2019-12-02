import { GetUserDto } from './get-user-dto.model';

export class GetFriendDto {
    constructor(public friendID: number, public sender: GetUserDto, public receiver: GetUserDto, public status: string){
    }
}
