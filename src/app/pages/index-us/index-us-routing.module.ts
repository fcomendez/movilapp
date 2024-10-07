import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexUsPage } from './index-us.page';

const routes: Routes = [
  {
    path: '',
    component: IndexUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexUsPageRoutingModule {}
