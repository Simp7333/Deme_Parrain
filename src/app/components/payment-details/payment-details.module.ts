import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PaymentDetailsComponent } from './payment-details.component';

@NgModule({
  declarations: [PaymentDetailsComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [PaymentDetailsComponent]
})
export class PaymentDetailsModule {}
