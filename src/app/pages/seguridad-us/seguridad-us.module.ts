import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadUsPageRoutingModule } from './seguridad-us-routing.module';

import { SeguridadUsPage } from './seguridad-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguridadUsPageRoutingModule
  ],
  declarations: [SeguridadUsPage]
})
export class SeguridadUsPageModule {}
