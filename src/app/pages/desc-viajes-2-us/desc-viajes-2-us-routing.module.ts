import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescViajes2UsPage } from './desc-viajes-2-us.page';

const routes: Routes = [
  {
    path: '',
    component: DescViajes2UsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescViajes2UsPageRoutingModule {}
