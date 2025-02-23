import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
  LOCALE_ID,
  Renderer2,
  RendererFactory2,
  signal,
} from '@angular/core';
import { Language } from '@shared/enums/language.enum';
import { enUS } from '@shared/i18n/enUS';
import { esAR } from '@shared/i18n/esAR';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private translations: { [key: string]: { [key: string]: string } } = {
    [Language.EN]: enUS,
    [Language.ES]: esAR,
  };

  currentLang = signal<Language>(Language.ES);

  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initLang(): void {
    const lang = this.getDeviceLang();

    this.setLanguage(lang);
  }

  getCurrentLanguage(): Language {
    return this.currentLang();
  }

  instant(key: string): string {
    return this.translations[this.currentLang()][key] || key;
  }

  pipeTranslate(key: string, lang: Language) {
    return this.translations[lang][key] || key;
  }

  private getDeviceLang(): Language {
    const deviceLang = navigator.language;
    const lang = deviceLang.split('-')[0].toLowerCase() as Language;

    if (Object.values(Language).includes(lang)) {
      return lang;
    }

    return Language.ES;
  }

  private setLanguage(lang: Language): void {
    if (this.translations[lang]) {
      this.currentLang.set(lang);
      this.renderer.setAttribute(this.document.documentElement, 'lang', lang);
      this.setLocale(lang);
    }
  }

  private setLocale(lang: Language): void {
    const localeMap: { [key in Language]: string } = {
      [Language.EN]: 'en',
      [Language.ES]: 'es',
    };

    const locale = localeMap[lang] || 'es';
    this.localeId = locale;
  }
}
