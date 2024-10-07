import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegUsAdmPage } from './reg-us-adm.page';

const routes: Routes = [
  {
    path: '',
    component: RegUsAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegUsAdmPageRoutingModule {}
