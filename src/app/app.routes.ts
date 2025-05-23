import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./components/sign-up/sign-up.component').then((c) => c.SignUpComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'player-list/:teamId',
    loadComponent: () =>
      import('./components/player-list/player-list.component').then((c) => c.PlayerListComponent),
  },
  {
    path: 'player/:id',
    loadComponent: () =>
      import('./components/player-detail/player-detail.component').then((c) => c.PlayerDetailComponent),
  },
];
