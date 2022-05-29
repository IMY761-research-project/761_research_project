import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingInformComponent } from './calling-inform.component';

describe('CallingInformComponent', () => {
  let component: CallingInformComponent;
  let fixture: ComponentFixture<CallingInformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingInformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
