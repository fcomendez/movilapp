import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescViajeUsPage } from './desc-viaje-us.page';

const routes: Routes = [
  {
    path: '',
    component: DescViajeUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescViajeUsPageRoutingModule {}
