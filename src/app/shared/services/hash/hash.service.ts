import { Injectable } from '@angular/core';
import MD5 from 'crypto-js/md5';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HashService {
  generateHash(timestamp: number) {
    const privateKey = environment.MARVEL_PRIVATE_KEY;
    const publicKey = environment.MARVEL_PUBLIC_KEY;
    return MD5(`${timestamp}${privateKey}${publicKey}`).toString();
  }
}
