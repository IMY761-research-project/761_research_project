import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingContactSelectComponent } from './sliding-contact-select.component';

describe('SlidingContactSelectComponent', () => {
  let component: SlidingContactSelectComponent;
  let fixture: ComponentFixture<SlidingContactSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingContactSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingContactSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
