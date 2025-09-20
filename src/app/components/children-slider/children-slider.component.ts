import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'children-slider',
  standalone: true,
  imports: [IonicModule, SwiperModule, CommonModule],
  template: `
    <swiper
      [slidesPerView]="2.2"
      [spaceBetween]="8"
      class="children-slider"
    >
      <ng-template swiperSlide *ngFor="let child of children">
        <ion-card class="child-card">
          <ion-img [src]="child.image"></ion-img>
          <ion-card-content class="child-name">{{child.name}}</ion-card-content>
        </ion-card>
      </ng-template>
    </swiper>
  `,
  styleUrls: ['./children-slider.component.scss']
})
export class ChildrenSliderComponent {
  @Input() children: { name: string; image: string }[] = [];
}
