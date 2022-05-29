import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {

  receivingCall: boolean;
  makingCall:boolean;
  constructor() {
    this.receivingCall = false;
    this.makingCall = true;
  }

  ngOnInit() {
    
  }

  toggleSendReceive(){
    this.receivingCall = !this.receivingCall;
    this.makingCall = !this.receivingCall;
  }

}
