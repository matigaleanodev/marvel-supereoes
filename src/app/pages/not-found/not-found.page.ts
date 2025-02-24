import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonRow,
  IonCol,
  IonCardContent,
  IonCard,
} from '@ionic/angular/standalone';
import { TranslatePipe } from '@shared/pipes/translate/translate.pipe';
import { NavController } from '@ionic/angular/standalone';
import { JarvisComponent } from './components/jarvis/jarvis.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonCol,
    IonRow,
    IonButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    TranslatePipe,
    JarvisComponent,
  ],
})
export class NotFoundPage {
  private _nav = inject(NavController);

  goBack() {
    this._nav.navigateBack('/character-list');
  }
}
