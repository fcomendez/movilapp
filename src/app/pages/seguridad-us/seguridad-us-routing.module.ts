import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadUsPage } from './seguridad-us.page';

const routes: Routes = [
  {
    path: '',
    component: SeguridadUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadUsPageRoutingModule {}
