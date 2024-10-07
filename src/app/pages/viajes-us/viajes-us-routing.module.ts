import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesUsPage } from './viajes-us.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesUsPageRoutingModule {}
