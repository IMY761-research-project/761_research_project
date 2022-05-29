import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';
import { HomePageModule } from '../home/home.module';
import { MapsMainHomeComponent } from './components/maps-main-home/maps-main-home.component';
import { MapsListeningScreenComponent } from './components/maps-listening-screen/maps-listening-screen.component';
import { MapsListeningAcceptedComponent } from './components/maps-listening-accepted/maps-listening-accepted.component';
import { DisplayMapScreenComponent } from './components/display-map-screen/display-map-screen.component';
import { PreviousAddressesComponent } from './components/previous-addresses/previous-addresses.component';
import { VoiceActivationComponent } from './components/voice-activation/voice-activation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule,
    HomePageModule
  ],
  declarations: [MapsPage, MapsMainHomeComponent, MapsListeningScreenComponent, MapsListeningAcceptedComponent, DisplayMapScreenComponent, PreviousAddressesComponent, VoiceActivationComponent]
})
export class MapsPageModule {}
