import {Injectable} from '@angular/core';
import {User} from './User';
import {Role} from './Role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor() {
    this.user = {
      name : 'ueli.maurer',
      roles: [Role.READ_ABSENZEN_FILTER]
    };
  }
}
