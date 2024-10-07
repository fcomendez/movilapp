import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexUcPage } from './index-uc.page';

const routes: Routes = [
  {
    path: '',
    component: IndexUcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexUcPageRoutingModule {}
