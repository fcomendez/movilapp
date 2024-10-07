import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescViajes2UsPageRoutingModule } from './desc-viajes-2-us-routing.module';

import { DescViajes2UsPage } from './desc-viajes-2-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescViajes2UsPageRoutingModule
  ],
  declarations: [DescViajes2UsPage]
})
export class DescViajes2UsPageModule {}
