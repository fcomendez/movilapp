import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesUsPageRoutingModule } from './viajes-us-routing.module';

import { ViajesUsPage } from './viajes-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesUsPageRoutingModule
  ],
  declarations: [ViajesUsPage]
})
export class ViajesUsPageModule {}
