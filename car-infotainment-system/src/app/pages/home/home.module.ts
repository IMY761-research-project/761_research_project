import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MapComponent } from './components/map/map.component';
import { PhoneComponent } from './components/phone/phone.component';
import { MusicCompComponent } from './components/music-comp/music-comp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TopbarComponent, MapComponent, PhoneComponent, MusicCompComponent],
  exports: [TopbarComponent]
})
export class HomePageModule {}
