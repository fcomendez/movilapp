import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicUcAdmPageRoutingModule } from './solic-uc-adm-routing.module';

import { SolicUcAdmPage } from './solic-uc-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicUcAdmPageRoutingModule
  ],
  declarations: [SolicUcAdmPage]
})
export class SolicUcAdmPageModule {}
