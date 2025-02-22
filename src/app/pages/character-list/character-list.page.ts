import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  LoadingController,
  IonList,
} from '@ionic/angular/standalone';
import { MarvelService } from '@shared/services/marvel/marvel.service';
import { ChallengeParam } from '@shared/models/marvel-query-params.model';
import { CharacterService } from '@shared/services/character/character.service';
import { CharacterItemComponent } from './components/character-item/character-item.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CharacterItemComponent,
  ],
})
export class CharacterListPage implements OnInit {
  private _marvel = inject(MarvelService);
  private _character = inject(CharacterService);
  private _loading = inject(LoadingController);

  readonly characters = computed(() => this._character.characterList());

  constructor() {}

  ngOnInit(): void {
    this.getCharacters();
  }

  async getCharacters() {
    const load = await this._loading.create({
      message: 'Cargando datos...',
    });
    load.present();
    const params: ChallengeParam = { limit: 20 };
    this._marvel.getCharacters(params).subscribe({
      next: (characters) => {
        this._character.characterList.set(characters);
      },
      error: (error) => {
        load.dismiss();
        console.log(error.status, error.message);
      },
      complete: () => load.dismiss(),
    });
  }
}
