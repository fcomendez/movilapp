import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegUcAdmPageRoutingModule } from './reg-uc-adm-routing.module';

import { RegUcAdmPage } from './reg-uc-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegUcAdmPageRoutingModule
  ],
  declarations: [RegUcAdmPage]
})
export class RegUcAdmPageModule {}
