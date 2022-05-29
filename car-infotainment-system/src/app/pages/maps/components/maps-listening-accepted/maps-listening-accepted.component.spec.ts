import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsListeningAcceptedComponent } from './maps-listening-accepted.component';

describe('MapsListeningAcceptedComponent', () => {
  let component: MapsListeningAcceptedComponent;
  let fixture: ComponentFixture<MapsListeningAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsListeningAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsListeningAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
