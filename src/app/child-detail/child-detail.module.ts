import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChildDetailPage } from './child-detail.page';
import { ChildDetailPageRoutingModule } from './child-detail-routing.module';
import { SwiperModule } from 'swiper/angular';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildDetailPageRoutingModule,
  SwiperModule,
  ChildDetailPage
  ]
})
export class ChildDetailPageModule {}
// ...existing code...
