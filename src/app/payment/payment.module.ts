import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentPageRoutingModule } from './payment-routing.module';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { PaymentDetailsComponent } from '../components/payment-details/payment-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule,
  AppFooterComponent,
  PaymentDetailsComponent
  ],
})
export class PaymentPageModule {}
