import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHeaderComponent } from './location-header.component';

describe('LocationHeaderComponent', () => {
  let component: LocationHeaderComponent;
  let fixture: ComponentFixture<LocationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
