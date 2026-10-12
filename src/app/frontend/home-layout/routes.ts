import { Routes } from '@angular/router';

export const routes: Routes = [
      {
    path: '',
    data: { pageTitle: 'Home' },
    loadComponent: () =>
      import('../home/home.component').then((m) => m.HomeComponent),
  },
]