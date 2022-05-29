import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-phone-hang-up',
  templateUrl: './phone-hang-up.component.html',
  styleUrls: ['./phone-hang-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneHangUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
