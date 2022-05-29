import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToPhoneHome(){
    this.router.navigateByUrl('/phone');
  }
}
