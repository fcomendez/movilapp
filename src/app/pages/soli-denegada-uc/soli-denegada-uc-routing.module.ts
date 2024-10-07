import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoliDenegadaUcPage } from './soli-denegada-uc.page';

const routes: Routes = [
  {
    path: '',
    component: SoliDenegadaUcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoliDenegadaUcPageRoutingModule {}
