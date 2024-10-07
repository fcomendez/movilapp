import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexAdmPage } from './index-adm.page';

const routes: Routes = [
  {
    path: '',
    component: IndexAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexAdmPageRoutingModule {}
