import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificacionUcPage } from './verificacion-uc.page';

const routes: Routes = [
  {
    path: '',
    component: VerificacionUcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificacionUcPageRoutingModule {}
