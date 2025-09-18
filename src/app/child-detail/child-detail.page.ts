// child-detail.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-child-detail',
  standalone: true,
  imports: [IonicModule], // <-- important
  templateUrl: './child-detail.page.html',
})
export class ChildDetailPage {}
