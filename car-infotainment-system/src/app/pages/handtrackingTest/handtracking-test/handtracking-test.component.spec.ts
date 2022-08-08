import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandtrackingTestComponent } from './handtracking-test.component';

describe('HandtrackingTestComponent', () => {
  let component: HandtrackingTestComponent;
  let fixture: ComponentFixture<HandtrackingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandtrackingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandtrackingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
