import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WnForgotpasswordComponent } from './wn-forgotpassword.component';

describe('WnForgotpasswordComponent', () => {
  let component: WnForgotpasswordComponent;
  let fixture: ComponentFixture<WnForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WnForgotpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WnForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
