export class User {
    constructor(
        public userID: number = null,
        public email: string = '',
        public password: string = '',
        public name: string = '',
        public activated: boolean = null,
        public token: string = '')
    {}
}
