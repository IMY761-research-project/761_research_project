import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPausePlayComponent } from './music-pause-play.component';

describe('MusicPausePlayComponent', () => {
  let component: MusicPausePlayComponent;
  let fixture: ComponentFixture<MusicPausePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicPausePlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPausePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
