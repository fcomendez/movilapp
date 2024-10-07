import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescViajeUsPageRoutingModule } from './desc-viaje-us-routing.module';

import { DescViajeUsPage } from './desc-viaje-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescViajeUsPageRoutingModule
  ],
  declarations: [DescViajeUsPage]
})
export class DescViajeUsPageModule {}
