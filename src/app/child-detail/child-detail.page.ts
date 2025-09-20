import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';

@Component({
  selector: 'app-child-detail',
  standalone: true,
  imports: [IonicModule, AppFooterComponent],
  templateUrl: './child-detail.page.html',
  styleUrls: ['./child-detail.page.scss'],
})
export class ChildDetailPage {
}