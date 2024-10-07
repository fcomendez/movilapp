import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaViajeUcPage } from './vista-viaje-uc.page';

const routes: Routes = [
  {
    path: '',
    component: VistaViajeUcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaViajeUcPageRoutingModule {}
