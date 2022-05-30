import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps-listening-screen',
  templateUrl: './maps-listening-screen.component.html',
  styleUrls: ['./maps-listening-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapsListeningScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  AcceptRejectRoute(){
    this.router.navigateByUrl('/maps/mapsListeningAccept');
  }

}
