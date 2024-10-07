import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUsPageRoutingModule } from './perfil-us-routing.module';

import { PerfilUsPage } from './perfil-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUsPageRoutingModule
  ],
  declarations: [PerfilUsPage]
})
export class PerfilUsPageModule {}
