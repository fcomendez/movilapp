import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetUsAdmPage } from './det-us-adm.page';

const routes: Routes = [
  {
    path: '',
    component: DetUsAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetUsAdmPageRoutingModule {}
