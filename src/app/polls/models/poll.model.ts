import { User } from 'src/app/security/models/user.model';

export class Poll {
    constructor(public pollID: number, public ownerID: number, public owner: User, public name: string){
    }
}
