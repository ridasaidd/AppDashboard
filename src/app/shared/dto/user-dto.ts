export class UserDTO {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    pwd1: string;
    pwd2: string;

    constructor( values: {} = {} ) {
        Object.assign(this, values);
    }
}
