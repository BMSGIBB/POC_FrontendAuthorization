import {Directive, ElementRef, HostListener, Input, OnInit, TemplateRef, Type, ViewContainerRef} from '@angular/core';
import {RoleAuthorizerService} from '../role-authorizer.service';

@Directive({
  selector: '[appHasPermissionToSee]'
})
export class HasPermissionToSeeDirective implements OnInit {

  constructor(private viewContainer: ViewContainerRef,
              private roleAuthorizer: RoleAuthorizerService,
              private templateRef: TemplateRef<any>) {
  }

  @Input('appHasPermissionToSee') component: Type<any>;

  hasPermission(): boolean {
    return this.roleAuthorizer.isAuthorizedToSee(this.component);
  }

  ngOnInit(): void {
    if (this.hasPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
