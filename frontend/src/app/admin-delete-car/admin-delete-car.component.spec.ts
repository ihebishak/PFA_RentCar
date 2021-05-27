import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteCarComponent } from './admin-delete-car.component';

describe('AdminDeleteCarComponent', () => {
  let component: AdminDeleteCarComponent;
  let fixture: ComponentFixture<AdminDeleteCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
