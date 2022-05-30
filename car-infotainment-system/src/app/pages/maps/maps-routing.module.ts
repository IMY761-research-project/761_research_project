import { MapsListeningScreenComponent } from './components/maps-listening-screen/maps-listening-screen.component';
import { MapsPageModule } from './maps.module';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsPage } from './maps.page';

const routes: Routes = [
  {
    path: '',
    component:MapsPage,
  },
  {
    path:'voiceActivation',
    component: MapsListeningScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsPageRoutingModule {}
