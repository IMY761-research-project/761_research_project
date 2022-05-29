import { MapsMainHomeComponent } from './components/maps-main-home/maps-main-home.component';
import { MapsPageModule } from './maps.module';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsPage } from './maps.page';

const routes: Routes = [
  {
    path: '',
    component:MapsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsPageRoutingModule {}
