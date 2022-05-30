import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps-listening-accepted',
  templateUrl: './maps-listening-accepted.component.html',
  styleUrls: ['./maps-listening-accepted.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapsListeningAcceptedComponent implements OnInit {
  address: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.address = "80 Allcock st, Colbyn"
  }

  rejectAddress(){
    this.router.navigateByUrl('/maps/voiceActivation');
  }

  acceptAddress(){
    this.router.navigateByUrl('/maps/mapsDisplay');
  }


}
