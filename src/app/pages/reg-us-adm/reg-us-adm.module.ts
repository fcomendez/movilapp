import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegUsAdmPageRoutingModule } from './reg-us-adm-routing.module';

import { RegUsAdmPage } from './reg-us-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegUsAdmPageRoutingModule
  ],
  declarations: [RegUsAdmPage]
})
export class RegUsAdmPageModule {}
