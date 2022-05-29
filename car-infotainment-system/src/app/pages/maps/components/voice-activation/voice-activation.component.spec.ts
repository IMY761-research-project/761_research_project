import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceActivationComponent } from './voice-activation.component';

describe('VoiceActivationComponent', () => {
  let component: VoiceActivationComponent;
  let fixture: ComponentFixture<VoiceActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceActivationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
