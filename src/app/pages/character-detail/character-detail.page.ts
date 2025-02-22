import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CharacterService } from '@shared/services/character/character.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class CharacterDetailPage {
  private readonly _character = inject(CharacterService);
  private readonly route = inject(ActivatedRoute);

  private readonly id = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id')))
  );
  private readonly characters = computed(() => this._character.characterList());

  readonly character = computed(() => {
    const id = this.id();
    const list = this.characters();
    if (!id || !list) return;

    const character = list.find((i) => i.id === Number(id));

    return character;
  });

  readonly comicCount = computed(() => this.character()?.comics.available);
  readonly seriesCount = computed(() => this.character()?.series.available);
  readonly storiesCount = computed(() => this.character()?.stories.available);
}
