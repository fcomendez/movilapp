import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPerfUsPageRoutingModule } from './edit-perf-us-routing.module';

import { EditPerfUsPage } from './edit-perf-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPerfUsPageRoutingModule
  ],
  declarations: [EditPerfUsPage]
})
export class EditPerfUsPageModule {}
