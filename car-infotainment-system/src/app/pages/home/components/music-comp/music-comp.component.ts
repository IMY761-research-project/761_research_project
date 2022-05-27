import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-music-comp',
  templateUrl: './music-comp.component.html',
  styleUrls: ['./music-comp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
