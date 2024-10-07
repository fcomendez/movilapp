import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoUcPage } from './info-uc.page';

const routes: Routes = [
  {
    path: '',
    component: InfoUcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoUcPageRoutingModule {}
