import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  MarvelApiResponse,
  MarvelCharacter,
  MarvelCharacterData,
} from '@models/marvel-api-response.model';
import { CharacterParams } from '@models/marvel-query-params.model';
import { HashService } from '@services/hash/hash.service';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private readonly _http = inject(HttpClient);
  private readonly _hash = inject(HashService);

  private readonly API = environment.MARVEL_API;

  getCharacters(query: CharacterParams): Observable<MarvelCharacter[]> {
    const params = this.generateParams(query);

    return this._http
      .get<MarvelApiResponse<MarvelCharacterData>>(`${this.API}/characters`, {
        params,
      })
      .pipe(map(({ data }) => data.results));
  }

  generateParams(query: Record<string, any>) {
    const ts = Date.now();
    const hash = this._hash.generateHash(ts);

    let params = new HttpParams();

    params = Object.keys(query).reduce((acc, key) => {
      return acc.append(key, query[key].toString());
    }, params);

    params = params.append('ts', ts).append('hash', hash);

    return params;
  }
}
