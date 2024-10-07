import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegViajesAdmPage } from './reg-viajes-adm.page';

const routes: Routes = [
  {
    path: '',
    component: RegViajesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegViajesAdmPageRoutingModule {}
