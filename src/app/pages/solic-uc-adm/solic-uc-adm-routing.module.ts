import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicUcAdmPage } from './solic-uc-adm.page';

const routes: Routes = [
  {
    path: '',
    component: SolicUcAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicUcAdmPageRoutingModule {}
