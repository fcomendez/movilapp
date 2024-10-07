import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUcPageRoutingModule } from './info-uc-routing.module';

import { InfoUcPage } from './info-uc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUcPageRoutingModule
  ],
  declarations: [InfoUcPage]
})
export class InfoUcPageModule {}
