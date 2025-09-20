import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <ion-footer>
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button routerLink="/dashboard" routerDirection="root">
            <ion-icon name="home-outline"></ion-icon>
            <ion-label>Accueil</ion-label>
          </ion-button>
          <ion-button routerLink="/stats" routerDirection="root">
            <ion-icon name="bar-chart-outline"></ion-icon>
            <ion-label>Stats</ion-label>
          </ion-button>
          <ion-button routerLink="/messages" routerDirection="root">
            <ion-icon name="mail-outline"></ion-icon>
            <ion-label>Messages</ion-label>
          </ion-button>
          <ion-button routerLink="/profile" routerDirection="root">
            <ion-icon name="person-outline"></ion-icon>
            <ion-label>Profil</ion-label>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppFooterComponent {
  @Input() navigationItems = [
    { id: 'acceuil', label: 'Acceuil', icon: 'home', isActive: true },
    { id: 'parrainner', label: 'Parrainner', icon: 'heart', isActive: false },
    { id: 'suivi', label: 'Suivi', icon: 'reader', isActive: false },
    { id: 'paiement', label: 'Paiement', icon: 'card', isActive: false },
    { id: 'rapport', label: 'Rapport', icon: 'document', isActive: false },
  ];
}
