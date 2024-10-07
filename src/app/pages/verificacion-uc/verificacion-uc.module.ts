import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificacionUcPageRoutingModule } from './verificacion-uc-routing.module';

import { VerificacionUcPage } from './verificacion-uc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificacionUcPageRoutingModule
  ],
  declarations: [VerificacionUcPage]
})
export class VerificacionUcPageModule {}
