import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoliAceptadaUcPage } from './soli-aceptada-uc.page';

const routes: Routes = [
  {
    path: '',
    component: SoliAceptadaUcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoliAceptadaUcPageRoutingModule {}
