import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParrainagePageRoutingModule } from './parrainage-routing.module';

import { ParrainagePage } from './parrainage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParrainagePageRoutingModule,
    ParrainagePage
  ],
  // declarations supprimé car ParrainagePage est standalone
})
export class ParrainagePageModule {}
