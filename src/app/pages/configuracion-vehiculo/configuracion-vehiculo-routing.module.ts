import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionVehiculoPage } from './configuracion-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionVehiculoPageRoutingModule {}
