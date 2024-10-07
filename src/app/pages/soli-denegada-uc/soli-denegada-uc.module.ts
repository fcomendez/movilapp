import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoliDenegadaUcPageRoutingModule } from './soli-denegada-uc-routing.module';

import { SoliDenegadaUcPage } from './soli-denegada-uc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoliDenegadaUcPageRoutingModule
  ],
  declarations: [SoliDenegadaUcPage]
})
export class SoliDenegadaUcPageModule {}
