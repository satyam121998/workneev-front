import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WnRegisterComponent } from './wn-register.component';

describe('WnRegisterComponent', () => {
  let component: WnRegisterComponent;
  let fixture: ComponentFixture<WnRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WnRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WnRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
