import { Component, OnInit } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [BrowserModule],
})
export class DashboardPage implements OnInit {

  sponsorshipData = [
    { label: 'Parrains actifs', value: 124, icon: 'assets/img/ebengroup.webp', bg: '#FEE2E2' },
    { label: 'Enfants parrainés', value: 87, icon: 'assets/img/ebengroup.webp', bg: '#D1FAE5' },
    { label: 'Paiements', value: '$12,450', icon: 'assets/img/ebengroup.webp', bg: '#DBEAFE' },
  ];

  childrenData = [
    { name: 'Awa', image: 'assets/img/ebengroup.webp' },
    { name: 'Mamadou', image: 'assets/img/happ.webp' },
    { name: 'Fatou', image: 'assets/img/Teaching.webp' },
  ];

  recentActivitiesData = [
    { title: 'Parrainage reçu', amount: '$50', date: '18 Sep 2025' },
    { title: 'Nouveau parrain', count: 1, date: '17 Sep 2025' },
  ];

  navigationItems = [
    { label: 'Accueil', icon: 'home', isActive: true },
    { label: 'Parrainer', icon: 'heart', isActive: false },
    { label: 'Suivi', icon: 'stats-chart', isActive: false },
    { label: 'Paiement', icon: 'card', isActive: false },
    { label: 'Rapport', icon: 'document-text', isActive: false },
  ];

  constructor() { }

  ngOnInit() {}
}
