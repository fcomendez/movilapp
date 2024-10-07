import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUsPage } from './perfil-us.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUsPageRoutingModule {}
