import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegViajesAdmPageRoutingModule } from './reg-viajes-adm-routing.module';

import { RegViajesAdmPage } from './reg-viajes-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegViajesAdmPageRoutingModule
  ],
  declarations: [RegViajesAdmPage]
})
export class RegViajesAdmPageModule {}
