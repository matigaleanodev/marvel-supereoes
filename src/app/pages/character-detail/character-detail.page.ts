import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonAvatar,
  IonCardContent,
  IonItem,
  IonLabel,
  IonBadge,
  IonButtons,
  IonBackButton,
  NavController,
  IonSpinner,
  IonSkeletonText,
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
    IonSkeletonText,
    IonBackButton,
    IonButtons,
    IonBadge,
    IonLabel,
    IonItem,
    IonCardContent,
    IonAvatar,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    NgClass,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailPage {
  private readonly _character = inject(CharacterService);
  private readonly route = inject(ActivatedRoute);
  private readonly _nav = inject(NavController);

  private readonly id = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('id')))
  );
  private readonly characters = computed(() => this._character.characterList());

  readonly character = computed(() => {
    const id = this.id();
    const list = this.characters();
    if (!id || !list) return;

    const character = list.find((i) => i.id === Number(id));

    if (!character) {
      this._nav.navigateRoot('/not-found');
    }

    return character;
  });

  readonly name = computed(() => this.character()?.name);

  readonly comicCount = computed(() => this.character()?.comics.available);
  readonly seriesCount = computed(() => this.character()?.series.available);
  readonly storiesCount = computed(() => this.character()?.stories.available);

  readonly thumbnail = computed(() => {
    const char = this.character();
    if (!char || !char.thumbnail) return '';

    const { path, extension } = char.thumbnail;
    const securePath = path.replace('http://', 'https://');

    return `${securePath}/standard_fantastic.${extension}`;
  });

  readonly loadingImage = signal(true);

  readonly characterDetails = computed(() => [
    {
      name: 'xComics',
      count: this.comicCount(),
    },
    {
      name: 'xSeries',
      count: this.seriesCount(),
    },
    {
      name: 'xStories',
      count: this.storiesCount(),
    },
  ]);

  onLoadImage() {
    this.loadingImage.set(false);
  }
}
