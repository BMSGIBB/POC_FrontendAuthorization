import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenzenComponent } from './absenzen.component';

describe('AbsenzenComponent', () => {
  let component: AbsenzenComponent;
  let fixture: ComponentFixture<AbsenzenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenzenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
