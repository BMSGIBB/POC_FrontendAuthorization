import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenzenFilterComponent } from './absenzen-filter.component';

describe('AbsenzenFilterComponent', () => {
  let component: AbsenzenFilterComponent;
  let fixture: ComponentFixture<AbsenzenFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenzenFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenzenFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
