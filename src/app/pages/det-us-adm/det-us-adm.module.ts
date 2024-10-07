import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetUsAdmPageRoutingModule } from './det-us-adm-routing.module';

import { DetUsAdmPage } from './det-us-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetUsAdmPageRoutingModule
  ],
  declarations: [DetUsAdmPage]
})
export class DetUsAdmPageModule {}
