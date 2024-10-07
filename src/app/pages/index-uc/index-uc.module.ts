import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexUcPageRoutingModule } from './index-uc-routing.module';

import { IndexUcPage } from './index-uc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexUcPageRoutingModule
  ],
  declarations: [IndexUcPage]
})
export class IndexUcPageModule {}
