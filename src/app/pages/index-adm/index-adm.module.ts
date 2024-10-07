import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexAdmPageRoutingModule } from './index-adm-routing.module';

import { IndexAdmPage } from './index-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexAdmPageRoutingModule
  ],
  declarations: [IndexAdmPage]
})
export class IndexAdmPageModule {}
