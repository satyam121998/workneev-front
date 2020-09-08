import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WnLoginComponent } from './wn-login.component';

describe('WnLoginComponent', () => {
  let component: WnLoginComponent;
  let fixture: ComponentFixture<WnLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WnLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
