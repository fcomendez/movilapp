import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoliAceptadaUcPageRoutingModule } from './soli-aceptada-uc-routing.module';

import { SoliAceptadaUcPage } from './soli-aceptada-uc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoliAceptadaUcPageRoutingModule
  ],
  declarations: [SoliAceptadaUcPage]
})
export class SoliAceptadaUcPageModule {}
