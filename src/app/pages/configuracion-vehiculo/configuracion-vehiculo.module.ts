import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionVehiculoPageRoutingModule } from './configuracion-vehiculo-routing.module';

import { ConfiguracionVehiculoPage } from './configuracion-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionVehiculoPageRoutingModule
  ],
  declarations: [ConfiguracionVehiculoPage]
})
export class ConfiguracionVehiculoPageModule {}
