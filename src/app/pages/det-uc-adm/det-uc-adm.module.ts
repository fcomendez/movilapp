import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetUcAdmPageRoutingModule } from './det-uc-adm-routing.module';

import { DetUcAdmPage } from './det-uc-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetUcAdmPageRoutingModule
  ],
  declarations: [DetUcAdmPage]
})
export class DetUcAdmPageModule {}
