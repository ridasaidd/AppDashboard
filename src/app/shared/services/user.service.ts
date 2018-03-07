import { Injectable } from '@angular/core';
import { UserDTO } from './../dto/user-dto';

@Injectable()
export class UserService {

  // private collection: 'users';

  private mock: UserDTO[] = [{
    username: 'coldfire',
    email: 'rida_538@hotmail.com',
    firstName: 'rida',
    lastName: 'said',
    password: 'caramail',
    pwd1: 'caramail',
    pwd2: 'caramail'
  }, {
    username: 'ridasaidd',
    email: 'rida_538@hotmail.com',
    firstName: 'rida',
    lastName: 'said',
    password: 'caramail',
    pwd1: 'caramail',
    pwd2: 'caramail'
  }, {
    username: 'adam',
    email: 'rida_538@hotmail.com',
    firstName: 'Adam',
    lastName: 'Adam',
    password: 'caramail',
    pwd1: 'caramail',
    pwd2: 'caramail'
  }];

  constructor() { }

  public getUserBy(username: string): UserDTO | boolean {
    for ( let i = 0; i < this.mock.length; i++ ) {
      if (this.mock[i].username === username) {
        return this.mock[i];
      }
    }
    return false;
  }

  public getAll(): UserDTO[] {
    return this.mock;
  }

  public create(user: UserDTO): boolean {
    if (user.pwd1 === user.pwd2) {
      user.password = user.pwd1;
      this.mock.push(user);
      return true;
    }
    return false;
  }

  public delete(username: string): boolean {
    for ( let i = 0; i < this.mock.length; i++ ) {
      if (this.mock[i].username === username) {
        this.mock.splice(i, 1);
        return true;
      }
    }
    return false;
  }

}
