import { MapsListeningScreenComponent } from './components/maps-listening-screen/maps-listening-screen.component';
import { MapsPageModule } from './maps.module';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsPage } from './maps.page';
import { MapsListeningAcceptedComponent } from './components/maps-listening-accepted/maps-listening-accepted.component';
import { DisplayMapScreenComponent } from './components/display-map-screen/display-map-screen.component';

const routes: Routes = [
  {
    path: '',
    component:MapsPage,
  },
  {
    path:'voiceActivation',
    component: MapsListeningScreenComponent
  },
  {
    path:'mapsListeningAccept',
    component: MapsListeningAcceptedComponent
  },
  {
    path:'mapsDisplay',
    component: DisplayMapScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsPageRoutingModule {}
