import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetViajesAdmPageRoutingModule } from './det-viajes-adm-routing.module';

import { DetViajesAdmPage } from './det-viajes-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetViajesAdmPageRoutingModule
  ],
  declarations: [DetViajesAdmPage]
})
export class DetViajesAdmPageModule {}
