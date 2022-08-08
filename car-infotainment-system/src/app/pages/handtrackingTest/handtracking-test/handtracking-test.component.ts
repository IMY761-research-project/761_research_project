import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { HandtrackingService } from 'src/app/services/handtracking.service';

@Component({
  selector: 'app-handtracking-test',
  templateUrl: './handtracking-test.component.html',
  styleUrls: ['./handtracking-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HandtrackingTestComponent implements OnInit {
  @ViewChild('video') video!:ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  
  constructor(private handtrackService:HandtrackingService) {
   }

  ngOnInit(): void {
  }

}
