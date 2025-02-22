import { Injectable, signal } from '@angular/core';
import { MarvelCharacter } from '@shared/models/marvel-api-response.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  readonly characterList = signal<MarvelCharacter[]>([]);
}
