import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-calling-inform[name]',
  templateUrl: './calling-inform.component.html',
  styleUrls: ['./calling-inform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallingInformComponent implements OnInit {

  @Input() name="";

  constructor() { }

  ngOnInit(): void {
  }

}
