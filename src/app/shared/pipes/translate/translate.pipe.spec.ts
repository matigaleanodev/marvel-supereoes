import { TranslatePipe } from './translate.pipe';
import { TranslateService } from '@shared/services/translate/translate.service';
import { TestBed } from '@angular/core/testing';

describe('TranslatePipe', () => {
  let pipe: TranslatePipe;
  let translateServiceMock: any;

  beforeEach(() => {
    translateServiceMock = {
      pipeTranslate: (key: string, lang: string) => {
        if (key === 'xCargandoDatos' && lang === 'es') {
          return 'Cargando Datos';
        }
        return key;
      },
      currentLang: () => 'es',
    };

    TestBed.configureTestingModule({
      providers: [
        TranslatePipe,
        { provide: TranslateService, useValue: translateServiceMock },
      ],
    });

    pipe = TestBed.inject(TranslatePipe);
  });

  it('debería crear una instancia del pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('debería devolver la traducción correcta para una key válida', () => {
    const result = pipe.transform('xCargandoDatos');
    expect(result).toBe('Cargando Datos');
  });

  it('debería devolver la key si la traducción no se encuentra', () => {
    const result = pipe.transform('xNoKey');
    expect(result).toBe('xNoKey');
  });
});
