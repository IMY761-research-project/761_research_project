import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sliding-contact-select',
  templateUrl: './sliding-contact-select.component.html',
  styleUrls: ['./sliding-contact-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlidingContactSelectComponent implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit(): void {
  }

}
