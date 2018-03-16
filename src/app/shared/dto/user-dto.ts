export class UserDTO {
    username: string;
    email: string;
    name: {
        first: string,
        last: string
    };
    password: {
        pwd1: string,
        pwd2: string
    };

    constructor( values: {} = {} ) {
        Object.assign(this, values);
    }
}
