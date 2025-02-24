import { TestBed } from '@angular/core/testing';
import { CharacterListPage } from './character-list.page';
import { MarvelService } from '@shared/services/marvel/marvel.service';
import { CharacterService } from '@shared/services/character/character.service';
import { LoadingController } from '@ionic/angular';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { TranslateService } from '@shared/services/translate/translate.service';

describe('CharacterListPage', () => {
  it('debería crear el componente', async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListPage],
      providers: [
        provideRouter([]),
        {
          provide: MarvelService,
          useValue: {
            getCharacters: jasmine.createSpy().and.returnValue(of([])),
          },
        },
        {
          provide: CharacterService,
          useValue: { characterList: jasmine.createSpy().and.returnValue([]) },
        },
        {
          provide: LoadingController,
          useValue: {
            create: jasmine
              .createSpy()
              .and.returnValue({
                present: jasmine.createSpy(),
                dismiss: jasmine.createSpy(),
              }),
          },
        },
        {
          provide: TranslateService,
          useValue: {
            instant: jasmine.createSpy().and.returnValue('Cargando...'),
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(CharacterListPage);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
