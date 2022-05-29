import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMapScreenComponent } from './display-map-screen.component';

describe('DisplayMapScreenComponent', () => {
  let component: DisplayMapScreenComponent;
  let fixture: ComponentFixture<DisplayMapScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMapScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMapScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
