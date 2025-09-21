import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { PaymentDetailsComponent } from '../components/payment-details/payment-details.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [IonicModule, CommonModule, AppFooterComponent, PaymentDetailsComponent],
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {
  paymentType: 'card' | 'mobilemoney' | 'paypal' = 'card';

  confirmPayment() {
    // Logique de confirmation de paiement à compléter
    alert('Paiement confirmé !');
  }

  setPaymentType(type: 'card' | 'mobilemoney' | 'paypal') {
    this.paymentType = type;
  }
}
