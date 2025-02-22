import { Component, computed, inject, input } from '@angular/core';
import {
  IonItem,
  IonThumbnail,
  IonLabel,
  NavController,
} from '@ionic/angular/standalone';
import { MarvelCharacter } from '@shared/models/marvel-api-response.model';

@Component({
  selector: 'app-character-item',
  standalone: true,
  imports: [IonLabel, IonItem, IonThumbnail],
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent {
  readonly character = input.required<MarvelCharacter>();

  private _nav = inject(NavController);

  readonly thumbnail = computed(() => {
    const char = this.character();
    if (!char || !char.thumbnail) return '';

    const { path, extension } = char.thumbnail;

    return `${path}.${extension}`;
  });

  readonly name = computed(() => this.character()?.name);

  selectCharacter({ id }: MarvelCharacter) {
    this._nav.navigateForward(`/character-detail/${id}`);
  }
}
