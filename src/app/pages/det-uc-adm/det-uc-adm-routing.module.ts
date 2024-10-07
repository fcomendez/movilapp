import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetUcAdmPage } from './det-uc-adm.page';

const routes: Routes = [
  {
    path: '',
    component: DetUcAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetUcAdmPageRoutingModule {}
