import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonePageRoutingModule } from './phone-routing.module';

import { PhonePage } from './phone.page';
import { HomePageModule } from '../home/home.module';
import { CallingInformComponent } from './components/calling-inform/calling-inform.component';
import { PhoneAnswerComponent } from './components/phone-answer/phone-answer.component';
import { PhoneHangUpComponent } from './components/phone-hang-up/phone-hang-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhonePageRoutingModule,
    HomePageModule
  ],
  declarations: [PhonePage, CallingInformComponent, PhoneAnswerComponent, PhoneHangUpComponent]
})
export class PhonePageModule {}
