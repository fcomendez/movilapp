import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarUsAdmPage } from './agregar-us-adm.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarUsAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarUsAdmPageRoutingModule {}
