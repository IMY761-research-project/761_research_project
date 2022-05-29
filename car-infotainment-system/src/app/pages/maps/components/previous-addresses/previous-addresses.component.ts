import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-previous-addresses',
  templateUrl: './previous-addresses.component.html',
  styleUrls: ['./previous-addresses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviousAddressesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
