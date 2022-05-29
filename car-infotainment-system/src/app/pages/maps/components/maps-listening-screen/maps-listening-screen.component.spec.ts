import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsListeningScreenComponent } from './maps-listening-screen.component';

describe('MapsListeningScreenComponent', () => {
  let component: MapsListeningScreenComponent;
  let fixture: ComponentFixture<MapsListeningScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsListeningScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsListeningScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
