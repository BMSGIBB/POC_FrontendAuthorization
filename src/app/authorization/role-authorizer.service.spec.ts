import { TestBed, inject } from '@angular/core/testing';

import { RoleAuthorizerService } from './role-authorizer.service';

describe('RoleAuthorizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleAuthorizerService]
    });
  });

  it('should be created', inject([RoleAuthorizerService], (service: RoleAuthorizerService) => {
    expect(service).toBeTruthy();
  }));
});
