import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildDetailPageRoutingModule } from './child-detail-routing.module';

import { ChildDetailPage } from './child-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildDetailPageRoutingModule
  ],
})
export class ChildDetailPageModule {}
