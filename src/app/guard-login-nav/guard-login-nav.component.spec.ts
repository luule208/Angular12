import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardLoginNavComponent } from './guard-login-nav.component';

describe('GuardLoginNavComponent', () => {
  let component: GuardLoginNavComponent;
  let fixture: ComponentFixture<GuardLoginNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardLoginNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardLoginNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
