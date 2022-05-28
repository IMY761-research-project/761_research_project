import { TopbarComponent } from './../home/components/topbar/topbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicPageRoutingModule } from './music-routing.module';

import { MusicPage } from './music.page';
import { MusicPlayingComponent } from './components/music-playing/music-playing.component';
import { MusicPausePlayComponent } from './components/music-pause-play/music-pause-play.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicPageRoutingModule
  ],
  declarations: [MusicPage, TopbarComponent, MusicPlayingComponent, MusicPausePlayComponent]
})
export class MusicPageModule {}
