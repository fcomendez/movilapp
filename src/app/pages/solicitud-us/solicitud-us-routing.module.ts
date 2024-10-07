import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudUsPage } from './solicitud-us.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudUsPageRoutingModule {}
