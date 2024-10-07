import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudUsPageRoutingModule } from './solicitud-us-routing.module';

import { SolicitudUsPage } from './solicitud-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudUsPageRoutingModule
  ],
  declarations: [SolicitudUsPage]
})
export class SolicitudUsPageModule {}
