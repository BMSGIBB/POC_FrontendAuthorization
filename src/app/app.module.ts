import {BrowserModule} from '@angular/platform-browser';
import {NgModule, TemplateRef} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AbsenzenComponent} from './absenzen/absenzen.component';
import {AbsenzenEditComponent} from './absenzen/absenzen-edit/absenzen-edit.component';
import {UserService} from './authorization/user.service';
import {RoleAuthorizerService} from './authorization/role-authorizer.service';
import { HasPermissionToSeeDirective } from './authorization/directive/has-permission-to-see.directive';
import { HasPermissionToAccessDirective } from './authorization/directive/has-permission-to-access.directive';
import { AbsenzenFilterComponent } from './absenzen/absenzen-filter/absenzen-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbsenzenComponent,
    AbsenzenEditComponent,
    HasPermissionToSeeDirective,
    HasPermissionToAccessDirective,
    AbsenzenFilterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
    RoleAuthorizerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
