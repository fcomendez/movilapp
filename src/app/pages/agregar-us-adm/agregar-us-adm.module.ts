import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarUsAdmPageRoutingModule } from './agregar-us-adm-routing.module';

import { AgregarUsAdmPage } from './agregar-us-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarUsAdmPageRoutingModule
  ],
  declarations: [AgregarUsAdmPage]
})
export class AgregarUsAdmPageModule {}
