import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-voice-activation',
  templateUrl: './voice-activation.component.html',
  styleUrls: ['./voice-activation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoiceActivationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
