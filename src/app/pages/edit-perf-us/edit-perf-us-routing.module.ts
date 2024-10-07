import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPerfUsPage } from './edit-perf-us.page';

const routes: Routes = [
  {
    path: '',
    component: EditPerfUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPerfUsPageRoutingModule {}
