import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class AppFooterComponent {
  @Input() navigationItems = [
    { id: 'dashboard', label: 'Accueil', icon: 'home', isActive: false },
    { id: 'parrainage', label: 'Parrainer', icon: 'heart', isActive: false },
    { id: 'child-detail', label: 'Suivi', icon: 'reader', isActive: false },
    { id: 'paiement', label: 'Paiement', icon: 'card', isActive: false },
    { id: 'rapport', label: 'Rapport', icon: 'document', isActive: false },
  ];
}
