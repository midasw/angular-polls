export class UserRegisterInvitee {
    constructor(
        public guid: string,
        public password: string,
        public passwordConfirmation: string,
        public name: string)
    {}
}
