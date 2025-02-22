import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'character-list',
    loadComponent: () =>
      import('./pages/character-list/character-list.page').then(
        (m) => m.CharacterListPage
      ),
  },
  {
    path: 'character-detail/:id',
    loadComponent: () =>
      import('./pages/character-detail/character-detail.page').then(
        (m) => m.CharacterDetailPage
      ),
  },
  {
    path: '',
    redirectTo: 'character-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
    pathMatch: 'full',
  },
];
