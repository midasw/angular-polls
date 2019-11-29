export class GetUserDto {
    constructor(public userID: number, public email: string, public name: string, public activated: boolean){
    }
}
