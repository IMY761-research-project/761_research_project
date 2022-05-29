import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAnswerComponent } from './phone-answer.component';

describe('PhoneAnswerComponent', () => {
  let component: PhoneAnswerComponent;
  let fixture: ComponentFixture<PhoneAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
