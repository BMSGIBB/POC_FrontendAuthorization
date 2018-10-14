import {Type} from '@angular/core';
import {Role} from './Role';

export interface RoleAuthorization {
  roles: Role[];
  component: Type<any>;
  parentComponent: Type<any>;
}
