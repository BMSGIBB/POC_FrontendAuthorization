import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenzenEditComponent } from './absenzen-edit.component';

describe('AbsenzenEditComponent', () => {
  let component: AbsenzenEditComponent;
  let fixture: ComponentFixture<AbsenzenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenzenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenzenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
