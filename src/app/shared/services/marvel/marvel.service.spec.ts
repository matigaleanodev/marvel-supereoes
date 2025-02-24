import { of } from 'rxjs';
import { MarvelService } from './marvel.service';
import {
  MarvelApiResponse,
  MarvelCharacterData,
} from '@shared/models/marvel-api-response.model';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CharacterParams } from '@shared/models/marvel-query-params.model';

describe('MarvelService', () => {
  let service: MarvelService;

  const mockResponse: MarvelApiResponse<MarvelCharacterData> = {
    code: 200,
    status: 'Ok',
    copyright: '© 2025 MARVEL',
    attributionText: 'Data provided by Marvel. © 2025 MARVEL',
    attributionHTML:
      'Data provided by <a href="https://www.marvel.com">Marvel</a>',
    etag: '1234567890',
    data: {
      offset: 0,
      limit: 20,
      total: 2,
      count: 2,
      results: [
        {
          id: 1,
          name: 'Spider-Man',
          description: 'Friendly neighborhood Spider-Man',
          modified: '',
          thumbnail: { path: '', extension: '' },
          resourceURI: '',
          comics: { available: 0, collectionURI: '', items: [], returned: 0 },
          series: { available: 0, collectionURI: '', items: [], returned: 0 },
          stories: { available: 0, collectionURI: '', items: [], returned: 0 },
          events: { available: 0, collectionURI: '', items: [], returned: 0 },
          urls: [],
        },
        {
          id: 2,
          name: 'Iron Man',
          description: 'Genius, billionaire, playboy, philanthropist',
          modified: '',
          thumbnail: { path: '', extension: '' },
          resourceURI: '',
          comics: { available: 0, collectionURI: '', items: [], returned: 0 },
          series: { available: 0, collectionURI: '', items: [], returned: 0 },
          stories: { available: 0, collectionURI: '', items: [], returned: 0 },
          events: { available: 0, collectionURI: '', items: [], returned: 0 },
          urls: [],
        },
      ],
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: { get: () => of(mockResponse) } },
        MarvelService,
      ],
    });
    service = TestBed.inject(MarvelService);
  });

  it('deberia crear una instancia del servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar la lista de personajes', () => {
    const query: CharacterParams = { name: 'Spider' };

    service.getCharacters(query).subscribe((characters) => {
      expect(characters.length).toBe(2);
      expect(characters[0].name).toBe('Spider-Man');
    });
  });
});
