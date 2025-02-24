import { TestBed } from '@angular/core/testing';

import { TranslateService } from './translate.service';
import { Language } from '@shared/enums/language.enum';
import { esAR } from '@shared/i18n/esAR';

describe('TranslateService', () => {
  let service: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateService);
  });

  it('deberia crear una instancia del servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería inicializar el idioma y setear currentLang al idioma del dispositivo', () => {
    const spy = spyOnProperty(navigator, 'language', 'get').and.returnValue(
      'es-AR'
    );

    service.initLang();

    expect(service.getCurrentLanguage()).toBe(Language.ES);

    expect(spy).toHaveBeenCalled();
  });

  it('debería devolver el idioma actual', () => {
    expect(service.getCurrentLanguage()).toBe(Language.ES);

    service['setLanguage'](Language.EN);
    expect(service.getCurrentLanguage()).toBe(Language.EN);
  });

  it('constante de traduccion debería devolver el valor traducido para una key válida', () => {
    const key = 'xCargandoDatos';
    const translation = esAR[key];

    service['setLanguage'](Language.ES);
    expect(service.instant(key)).toBe(translation);
  });

  it('constante de traduccion debería devolver la key si la traducción no se encuentra', () => {
    const key = 'xNoKey';

    expect(service.instant(key)).toBe(key);

    service['setLanguage'](Language.EN);
    expect(service.instant(key)).toBe(key);
  });

  it('metodo instant debería devolver la traducción para una key válida', () => {
    const key = 'xCargandoDatos';
    const translation = service.instant(key);
    expect(translation).toBe('Cargando datos');
  });

  it('metodo instant debería devolver la key si la traducción no se encuentra', () => {
    const key = 'xNoKey';
    const translation = service.instant(key);
    expect(translation).toBe(key);
  });
});
