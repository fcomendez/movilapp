import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexUsPageRoutingModule } from './index-us-routing.module';

import { IndexUsPage } from './index-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexUsPageRoutingModule
  ],
  declarations: [IndexUsPage]
})
export class IndexUsPageModule {}
