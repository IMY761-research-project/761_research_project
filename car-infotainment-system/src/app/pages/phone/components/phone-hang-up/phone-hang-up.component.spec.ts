import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneHangUpComponent } from './phone-hang-up.component';

describe('PhoneHangUpComponent', () => {
  let component: PhoneHangUpComponent;
  let fixture: ComponentFixture<PhoneHangUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneHangUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneHangUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
