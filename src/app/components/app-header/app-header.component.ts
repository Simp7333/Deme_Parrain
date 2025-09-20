import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule],
  template: `

    <ion-header>
      <ion-toolbar color="light" class="header-toolbar">
        <div class="header-content">
          <ion-img src="assets/icon/logo.png" class="header-logo"></ion-img>
          <div class="header-icons">
            <ion-button fill="clear" class="header-icon-btn" routerLink="/notifications">
              <ion-icon name="notifications-outline"></ion-icon>
            </ion-button>
            <ion-button fill="clear" class="header-icon-btn" routerLink="/settings">
              <ion-icon name="settings-outline"></ion-icon>
            </ion-button>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    
  `,
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {}
