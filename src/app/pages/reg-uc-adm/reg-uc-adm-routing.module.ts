import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegUcAdmPage } from './reg-uc-adm.page';

const routes: Routes = [
  {
    path: '',
    component: RegUcAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegUcAdmPageRoutingModule {}
