import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-display-map-screen',
  templateUrl: './display-map-screen.component.html',
  styleUrls: ['./display-map-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayMapScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
