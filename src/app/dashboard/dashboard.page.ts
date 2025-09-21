import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

// ✅ Importer tes composants standalone
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { ChildrenSliderComponent } from '../components/children-slider/children-slider.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    AppHeaderComponent,
    AppFooterComponent,
    ChildrenSliderComponent
  ],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  navigationItems = [
    { id: 'acceuil', label: 'Acceuil', icon: 'home', isActive: true },
    { id: 'parrainner', label: 'Parrainner', icon: 'heart', isActive: false },
    { id: 'suivi', label: 'Suivi', icon: 'reader', isActive: false },
    { id: 'paiement', label: 'Paiement', icon: 'card', isActive: false },
    { id: 'rapport', label: 'Rapport', icon: 'document', isActive: false },
  ];
  breakpoints = {
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 }
  };
  sponsorshipData = [
    { label: 'Enfants parrainés', value: 3, icon: 'assets/icon/coeur.png', iconBg: '#e0f7fa' },
    { label: 'Dons ce mois', value: '120€', icon: 'assets/icon/favicon.png', iconBg: '#fce4ec' },
    { label: 'Total versé', value: '2 500€', icon: 'assets/icon/impact.png', iconBg: '#f3e5f5' },
  ];
  childrenData = [
    { name: 'Awa', image: 'assets/img/ebengroup.webp' },
    { name: 'Moussa', image: 'assets/img/happ.webp' },
    { name: 'Fatou', image: 'assets/img/Teaching.webp' },
    { name: 'Fatou', image: 'assets/img/ebengroup.webp' },
    { name: 'Fatou', image: 'assets/img/ebengroup.webp' },
  ];
  recentActivitiesData = [
    { title: 'nouveaux Bulletins recus', nbre: '+3', date: '01/09/2025', icon: 'ellipse' },
    { title: 'Paiement menseuel effectué', nbre: '75 000 fcfa', date: '15/08/2025', icon: 'ellipse' },
    { title: 'Photos activités partage', amount: '+3', date: '10/08/2025', icon: 'ellipse' },
  ];
}
