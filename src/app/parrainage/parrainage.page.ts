import { Component } from '@angular/core';
import { ToastController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { ChildrenSliderComponent } from '../components/children-slider/children-slider.component';

@Component({
  selector: 'app-parrainage',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AppHeaderComponent,
    AppFooterComponent,
    ChildrenSliderComponent
  ],
  templateUrl: './parrainage.page.html',
  styleUrls: ['./parrainage.page.scss']
})
export class ParrainagePage {
  childrenData = [
    { name: 'Awa', image: 'assets/img/ebengroup.webp' },
    { name: 'Moussa', image: 'assets/img/ebengroup.webp' },
    { name: 'Fatou', image: 'assets/img/ebengroup.webp' },
    { name: 'Fatou', image: 'assets/img/ebengroup.webp' },
    { name: 'Fatou', image: 'assets/img/ebengroup.webp' },
  ];
  filters = {
    genre: 'Pas de préférence',
    age: '4-9',
    pays: 'Mali',
    filleuls: 'Aucun'
  };

  profiles = [
    { name: 'Amadou Dembélé' },
    { name: 'Amadou Dembélé' },
    { name: 'Amadou Dembélé' },
    { name: 'Amadou Dembélé' },
    { name: 'Amadou Dembélé' },
    { name: 'Amadou Dembélé' }
  ];

  constructor(private toastController: ToastController) {}

  async onFilterChange(filter: string, event: any) {
    console.log(`Filtre ${filter} modifié:`, event.detail.value);
  }

  async onSearch() {
    const { genre, age, pays, filleuls } = this.filters;
    console.log('Recherche avec filtres:', { genre, age, pays, filleuls });
    const toast = await this.toastController.create({
      message: 'Recherche effectuée avec les filtres sélectionnés',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }

  async onProfileClick(profile: { name: string }) {
    console.log('Profil cliqué:', profile.name);
    const toast = await this.toastController.create({
      message: `Vous avez cliqué sur le profil de ${profile.name}`,
      duration: 2000,
      color: 'primary'
    });
    await toast.present();
  }
}