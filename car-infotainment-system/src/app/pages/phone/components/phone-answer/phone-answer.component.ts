import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-phone-answer',
  templateUrl: './phone-answer.component.html',
  styleUrls: ['./phone-answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneAnswerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
