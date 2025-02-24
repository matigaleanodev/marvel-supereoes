import { TestBed } from '@angular/core/testing';

import { HashService } from './hash.service';
import { environment } from 'src/environments/environment';
import MD5 from 'crypto-js/md5';

describe('HashService', () => {
  let service: HashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HashService);
  });

  it('deberia crear una instancia del servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería generar un hash correcto', () => {
    const timestamp = Date.now();
    const privateKey = environment.MARVEL_PRIVATE_KEY;
    const publicKey = environment.MARVEL_PUBLIC_KEY;
    const hash = MD5(`${timestamp}${privateKey}${publicKey}`).toString();

    const result = service.generateHash(timestamp);
    expect(result).toBe(hash);
  });
});
