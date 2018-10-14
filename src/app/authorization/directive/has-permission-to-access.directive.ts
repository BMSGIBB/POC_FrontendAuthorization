import {Directive, Input, OnInit, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {RoleAuthorizerService} from '../role-authorizer.service';

@Directive({
  selector: '[appHasPermissionToAccess]'
})
export class HasPermissionToAccessDirective implements OnInit {

  constructor(private viewContainer: ViewContainerRef,
              private roleAuthorizer: RoleAuthorizerService,
              private templateRef: TemplateRef<any>) {
  }

  @Input('appHasPermissionToAccess') component: Type<any>;

  hasPermission(): boolean {
    return this.roleAuthorizer.isAuthorizedToAccess(this.component);
  }

  ngOnInit(): void {
    if (this.hasPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
