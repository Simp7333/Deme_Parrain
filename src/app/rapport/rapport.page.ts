import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { DataTableComponent } from '../components/data-table/data-table.component';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.page.html',
  styleUrls: ['./rapport.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, AppHeaderComponent, AppFooterComponent, DataTableComponent]
})
export class RapportPage {
  kpis = [
    { label: 'Total contribué', value: '700.000 fCFA', icon: 'wallet' },
    { label: 'Dépenses réelles', value: '100.000 fCFA', icon: 'receipt' },
    { label: 'Mois actifs', value: '13', icon: 'calendar' }
  ];

  evolution = [
    { mois: 'Janvier', contribue: '20.000 fCFA', depense: '10.000 fCFA' },
    { mois: 'Février', contribue: '20.000 fCFA', depense: '10.000 fCFA' },
    { mois: 'Mars', contribue: '20.000 fCFA', depense: '10.000 fCFA' },
    { mois: 'Avril', contribue: '20.000 fCFA', depense: '10.000 fCFA' },
    { mois: 'Mai', contribue: '20.000 fCFA', depense: '10.000 fCFA' },
    { mois: 'Juin', contribue: '20.000 fCFA', depense: '10.000 fCFA' }
  ];

  impact = [
    { value: '3', label: 'Enfants parrainés' },
    { value: '18', label: 'Mois d’éducation financé' },
    { value: '95%', label: 'Efficacité des dons' }
  ];

  repartition = [
    { item: 'Fourniture scolarité', montant: '20.000 fCFA', part: '20% du total' },
    { item: 'Fourniture scolarité', montant: '20.000 fCFA', part: '20% du total' },
    { item: 'Fourniture scolarité', montant: '20.000 fCFA', part: '20% du total' },
    { item: 'Fourniture scolarité', montant: '20.000 fCFA', part: '20% du total' },
    { item: 'Fourniture scolarité', montant: '20.000 fCFA', part: '20% du total' }
  ];
}
