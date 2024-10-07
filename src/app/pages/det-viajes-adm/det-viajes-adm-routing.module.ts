import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetViajesAdmPage } from './det-viajes-adm.page';

const routes: Routes = [
  {
    path: '',
    component: DetViajesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetViajesAdmPageRoutingModule {}
