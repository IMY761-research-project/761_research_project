import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-comp',
  templateUrl: './music-comp.component.html',
  styleUrls: ['./music-comp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicCompComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToMusicHome(){
    this.router.navigateByUrl('/music');
  }

}
