import { Component, HostListener, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@shared/services/translate/translate.service';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private _tanslate = inject(TranslateService);

  ngOnInit(): void {
    this._tanslate.initLang();
  }

  @HostListener('document:readystatechange', ['$event'])
  onReadyStateChanged(event: any) {
    if (event.target.readyState === 'complete') {
      StatusBar.setStyle({ style: Style.Default });
      StatusBar.setOverlaysWebView({ overlay: false });
    }
  }
}
