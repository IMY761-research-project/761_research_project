import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  activateVoice(){
    this.router.navigateByUrl('/maps/voiceActivation');
  }

}
