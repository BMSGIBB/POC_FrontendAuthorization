import {Injectable, Type} from '@angular/core';
import {RoleAuthorization} from './RoleAuthorization';
import {ComponentNotFoundException} from './ComponentNotFoundException';
import {UserService} from './user.service';
import {AbsenzenComponent} from '../absenzen/absenzen.component';
import {HomeComponent} from '../home/home.component';
import {AbsenzenEditComponent} from '../absenzen/absenzen-edit/absenzen-edit.component';
import {Role} from './Role';
import {AbsenzenFilterComponent} from '../absenzen/absenzen-filter/absenzen-filter.component';
import {NoRolesFoundException} from './NoRolesFoundException';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthorizerService {

  authorization: RoleAuthorization[] = [];

  constructor(private userService: UserService) {
    this.configureAuthorization();
  }

  isAuthorizedToAccess(component: Type<any>): boolean {
    return this.checkRightsToAccess(component, false);
  }

  isAuthorizedToSee(component: Type<any>): boolean {
    return this.checkRightsToSee(component);
  }

  private configureAuthorization() {
    this.authorization.push(
      {
        component: AbsenzenComponent,
        parentComponent: HomeComponent,
        roles: [Role.READ_ABSENZEN]
      },
      {
        component: AbsenzenFilterComponent,
        parentComponent: AbsenzenComponent,
        roles: [Role.READ_ABSENZEN_FILTER]
      },
      {
        component: AbsenzenEditComponent,
        parentComponent: AbsenzenComponent,
        roles: [Role.EDIT_ABSENZEN]
      }
    );
  }

  private checkRightsToSee(componentToSee: Type<any>): boolean {
    this.userCheck();

    const componentAuthorization: RoleAuthorization = this.authorization
      .find(auth => auth.component.name === componentToSee.name);

    if (!componentToSee) {
      throw new ComponentNotFoundException('ERROR Component not found: component ->' + componentToSee.name);
    }

    return componentAuthorization.roles
      .every(role => this.userService.user.roles
        .some(userRole => userRole === role));
  }

  private checkRightsToAccess(componentToAccess: Type<any>, hasPermission: boolean): boolean {
    this.userCheck();

    if (hasPermission) {
      return true;
    }

    console.log('ComponentToAccess:' + componentToAccess.name);

    const parentAuthorizations: RoleAuthorization = this.authorization
      .find(auth => auth.component.name === componentToAccess.name);

    if (!parentAuthorizations) {
      throw new ComponentNotFoundException('ERROR Component not found: component ->' + componentToAccess.name);
    }

    const possessRole: boolean = parentAuthorizations.roles
      .some(role => this.userService.user.roles
        .some(userRole => userRole === role));

    if (possessRole) {
      return true;
    }

    const childrenAuthorizations: RoleAuthorization[] = this.authorization
      .filter(auth => auth.parentComponent.name === componentToAccess.name);

    let childPossessRole = false;

    childrenAuthorizations
      .forEach(auth => {
        const tempStatus: boolean = childPossessRole = this.checkRightsToAccess(auth.component, childPossessRole);
        if (tempStatus) {
          childPossessRole = tempStatus;
        }
      });

    return childPossessRole;
  }

  private userCheck() {
    if (this.userService.user.roles.length === 0) {
      throw new NoRolesFoundException('ERROR No roles found: The current user doesn\'t possess any role');
    }
  }
}
