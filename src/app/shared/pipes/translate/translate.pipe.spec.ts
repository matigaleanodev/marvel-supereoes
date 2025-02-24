import { TranslatePipe } from './translate.pipe';

describe('TranslatePipe', () => {
  it('debería crear una instancia del pipe', () => {
    const pipe = new TranslatePipe();
    expect(pipe).toBeTruthy();
  });

  it('debería devolver la traducción correcta para una key válida', () => {
    const pipe = new TranslatePipe();

    const translateServiceMock = {
      pipeTranslate: (key: string, lang: string) => {
        if (key === 'xCargandoDatos' && lang === 'es') {
          return 'Cargando Datos';
        }
        return key;
      },
      currentLang: () => 'es',
    };

    pipe['_service'] = translateServiceMock as any;

    const result = pipe.transform('xCargandoDatos');
    expect(result).toBe('Cargando Datos');
  });

  it('debería devolver debería devolver la key si la traducción no se encuentra', () => {
    const pipe = new TranslatePipe();

    const translateServiceMock = {
      pipeTranslate: (key: string, lang: string) => {
        if (key === 'xCargandoDatos' && lang === 'es') {
          return 'Cargando Datos';
        }
        return key;
      },
      currentLang: () => 'es',
    };

    pipe['_service'] = translateServiceMock as any;

    const result = pipe.transform('xNoKey');
    expect(result).toBe('xNoKey');
  });
});
