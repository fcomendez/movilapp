import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearViajeUcPageRoutingModule } from './crear-viaje-uc-routing.module';

import { CrearViajeUcPage } from './crear-viaje-uc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearViajeUcPageRoutingModule
  ],
  declarations: [CrearViajeUcPage]
})
export class CrearViajeUcPageModule {}
