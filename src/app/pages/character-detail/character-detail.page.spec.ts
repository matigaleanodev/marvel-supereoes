import { TestBed } from '@angular/core/testing';
import { CharacterDetailPage } from './character-detail.page';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { CharacterService } from '@shared/services/character/character.service';

describe('CharacterDetailPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailPage],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of({ get: () => '1' }) },
        },
        {
          provide: NavController,
          useValue: { navigateRoot: jasmine.createSpy() },
        },
        {
          provide: CharacterService,
          useValue: {
            characterList: jasmine.createSpy().and.returnValue([
              {
                id: 1,
                name: 'Spiderman',
                comics: { available: 100 },
                series: { available: 50 },
                stories: { available: 10 },
                thumbnail: { path: 'http://example.com', extension: 'jpg' },
              },
            ]),
          },
        },
      ],
    }).compileComponents();
  });

  it('debería crear el componente', () => {
    const fixture = TestBed.createComponent(CharacterDetailPage);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
