import { Component, Input } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent {
  @Input() amount: string = '30.000 fcfa';
  @Input() processingFee: string = '0 fcfa';
  @Input() total: string = '30.000 fcfa';
  @Input() cardShape: string = 'default'; // Pour changer la forme selon le type de paiement
  @Input() secureText: string = 'Paiement 100% sécurisé';
  @Input() showCardFields: boolean = true;
  @Input() paymentType: 'card' | 'mobilemoney' | 'paypal' = 'card';
  @Input() operator: string = 'Orange money';
  @Input() phonePrefix: string = '+223';
  @Input() phoneNumber: string = '';

  get showCardForm() {
    return this.showCardFields && this.paymentType === 'card';
  }
  get showMobileMoneyForm() {
    return this.showCardFields && this.paymentType === 'mobilemoney';
  }
  get showPaypalForm() {
    return this.showCardFields && this.paymentType === 'paypal';
  }
}
