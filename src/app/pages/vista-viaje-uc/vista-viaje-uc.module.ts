import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaViajeUcPageRoutingModule } from './vista-viaje-uc-routing.module';

import { VistaViajeUcPage } from './vista-viaje-uc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaViajeUcPageRoutingModule
  ],
  declarations: [VistaViajeUcPage]
})
export class VistaViajeUcPageModule {}
